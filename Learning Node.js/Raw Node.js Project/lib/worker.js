// title :Uptime monitoring serverlication
// Description:A restful api to monitor up or down time of user defined links
// Author:Niloy Chowdhury
// Date;15/4/2025

const data = require("./data");
const { parseJson } = require("../helpers/utilities");
const url = require("url");
const https = require("https");
const http = require("http");
const { sendTwilioSms } = require("../helpers/Handler/notifications");


//server object - module scaffolding
const worker = {};

worker.gatherAllChecks = () => {
  data.list("Checks", (err, checks) => {
    if (!err && checks && checks.length > 0) {
      checks.forEach((checks) => {
        data.read("Checks", checks, (err1, checkData) => {
          if (!err1 && checkData) {
            worker.validateCheckData(parseJson(checkData));
          } else {
            console.log("Error in reading check data", err1);
          }
        });
      });
    } else {
      console.log("Error in getting checks list", err);
    }
  });
};

worker.validateCheckData = (checkData) => {
  if (checkData && checkData.checkId) {
    checkData.state =
      typeof checkData.state == "string" &&
      ["up", "down"].indexOf(checkData.state) > -1
        ? checkData.state
        : "down";

    checkData.lastChecked =
      typeof checkData.lastChecked == "number" && checkData.lastChecked > 0
        ? checkData.lastChecked
        : false;

    worker.performCheck(checkData);
  } else {
    console.log("Check data is not valid", checkData);
    return;
  }
};

worker.performCheck = (checkData) => {
  //prepare the initial check outcome
  let checkOutcome = {
    error: false,
    responseCode: false,
  };
  let outcomeSent = false;
  const parsedUrl = url.parse(checkData.protocol + "://" + checkData.url, true);
  const hostName = parsedUrl.hostname;
  const path = parsedUrl.path;
  const requestDetails = {
    protocol: checkData.protocol + ":",
    hostName,
    method: checkData.method.toUpperCase(),
    path,
    timeout: checkData.timeoutSeconds * 1000,
  };
  const protocolToUse = checkData.protocol == "http" ? http : https;

  let req = protocolToUse.request(requestDetails, (res) => {
    const status = res.statusCode;
    checkOutcome.responseCode = status;
    if (!outcomeSent) {
      worker.processCheckOutcome(checkData, checkOutcome);
      outcomeSent = true;
    }
  });

  req.on("error", (e) => {
    let checkOutcome = {
      error: true,
      value: e,
    };
    if (!outcomeSent) {
      worker.processCheckOutcome(checkData, checkOutcome);
      outcomeSent = true;
    }
  });

  req.on("timeout", () => {
    let checkOutcome = {
      error: false,
      value: "timeout",
    };
    if (!outcomeSent) {
      worker.processCheckOutcome(checkData, checkOutcome);
      outcomeSent = true;
    }
  });

  req.end();
};

worker.processCheckOutcome = (checkData, checkOutcome) => {
  let state =
    !checkOutcome.error &&
    checkOutcome.responseCode &&
    checkData.successCodes.indexOf(checkOutcome.responseCode) > -1
      ? "up"
      : "down";

  //update the check data object and save it to disk
  let alertWanted =
    checkData.lastChecked && checkData.state !== state ? true : false;

  let uCheckData = checkData;
  uCheckData.state = state;
  uCheckData.lastChecked = Date.now();

  data.update("Checks", uCheckData.checkId, uCheckData, (err) => {
    if (err) {
      if (alertWanted) {
        worker.alertUserToStatusChange(uCheckData);
      } else {
        console.log("Check data is not changed", uCheckData);
      }
    } else {
      console.log("Error in updating check data", err);
    }
  });
};

worker.alertUserToStatusChange = (checkData) => {
  let msg = `Alert: Your check for ${checkData.method.toUpperCase()} ${
    checkData.protocol
  }://${checkData.url} is currently ${checkData.state}`;

  sendTwilioSms(msg, checkData.userPhone, (err, data) => {
    if (!err && data) {
      console.log("User was alerted successfully", data);
    } else {
      console.log("Error in sending alert to user", err);
    }
  });
};

worker.loop = () => {
  setInterval(() => {
    worker.gatherAllChecks();
  }, 1000 * 60);
};

//start the server
worker.init = () => {
  worker.gatherAllChecks();
  worker.loop();
};

module.exports = worker;
