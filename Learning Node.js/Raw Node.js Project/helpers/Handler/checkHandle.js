const data = require("../../lib/data"); // data module import
const { parseJson, hash } = require("../utilities"); // parseJson, hash function import
const details = require("../details");
const tokenHandler = require("./tokenHandler");
const environments = require("../Environments");

const handler = {};

handler.checkHandle = (requestProperties, callBack) => {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._check[requestProperties.method](requestProperties, callBack);
  } else {
    callBack(405, {
      message: "Method not allowed",
    });
  }
};

handler._check = {};

handler._check.get = (requestProperties, callBack) => {
  // console.log("GET /check called", requestProperties.queryStringObject);
  const id =
    typeof requestProperties.queryStringObject.id === "string" &&
    requestProperties.queryStringObject.id.trim().length === 64
      ? requestProperties.queryStringObject.id.trim()
      : false;

  if (id) {
    data.read("Checks", id, (err, checkData) => {
      if (!err && checkData) {
        const check = parseJson(checkData);
        const token =
          typeof requestProperties.headersObject.token === "string"
            ? requestProperties.headersObject.token
            : false;

        tokenHandler._token.verifyToken(token, check.phone, (tokenIsValid) => {
          if (tokenIsValid) {
            callBack(200, check);
          } else {
            callBack(403, { message: "Authentication failed" });
          }
        });
      } else {
        callBack(404, { message: "Check not found" });
      }
    });
  } else {
    callBack(400, { message: "Missing required field: id" });
  }
};

handler._check.post = (requestProperties, callBack) => {
  // console.log("POST /check called", requestProperties.body);

  const body = requestProperties.body || {};
  const headers = requestProperties.headersObject || {};

  let protocol =
    typeof body.protocol === "string" &&
    ["http", "https"].includes(body.protocol)
      ? body.protocol
      : false;
  let url =
    typeof body.url === "string" && body.url.trim().length > 0
      ? body.url.trim()
      : false;
  let method =
    typeof body.method === "string" &&
    ["get", "post", "put", "delete"].includes(body.method)
      ? body.method
      : false;
  let successCodes =
    typeof body.successCodes === "object" &&
    Array.isArray(body.successCodes) &&
    body.successCodes.length > 0
      ? body.successCodes
      : false;
  let timeoutSeconds =
    typeof body.timeoutSeconds === "number" &&
    body.timeoutSeconds % 1 === 0 &&
    body.timeoutSeconds >= 1 &&
    body.timeoutSeconds <= 5
      ? body.timeoutSeconds
      : false;

  // console.log('hi:'+protocol, url, method, successCodes, timeoutSeconds);

  if (protocol && url && method && successCodes && timeoutSeconds) {
    const token = typeof headers.token === "string" ? headers.token : false;

    data.read("Tokens", token, (err, tokenData) => {
      if (!err && tokenData) {
        const tokenObj = parseJson(tokenData);
        const phone = tokenObj.phone;

        data.read("Users", phone, (err1, userData) => {
          if (!err1 && userData) {
            tokenHandler._token.verifyToken(token, phone, (tokenIsValid) => {
              if (tokenIsValid) {
                const user = parseJson(userData);
                const userChecks =
                  typeof user.checks === "object" && Array.isArray(user.checks)
                    ? user.checks
                    : [];

                if (userChecks.length < environments.maxChecks) {
                  const checkId = hash(Math.random().toString(16).slice(2));
                  const checkObj = {
                    checkId,
                    phone,
                    protocol,
                    url,
                    method,
                    successCodes,
                    timeoutSeconds,
                  };

                  data.create("Checks", checkId, checkObj, (err2) => {
                    if (!err2) {
                      user.checks = userChecks;
                      user.checks.push(checkId); //add  the new check id to the user's checks array 
          

                      data.update("Users", phone, user, (err3) => {
                        if (err3) {
                          callBack(200, checkObj);
                        } else {
                          console.error("User update failed", err3);
                          callBack(500, {
                            message: "Could not update user with new check",
                          });
                        }
                      });
                    } else {
                      console.error("Check creation failed", err2);
                      callBack(500, {
                        message: "Could not create new check",
                      });
                    }
                  });
                } else {
                  callBack(401, {
                    message: "User has reached the max check limit",
                  });
                }
              } else {
                callBack(403, { message: "Token is invalid or expired" });
              }
            });
          } else {
            console.error("User not found", err1);
            callBack(403, { message: "User not found" });
          }
        });
      } else {
        console.error("Token not found or invalid", err);
        callBack(403, { message: "Authentication failed" });
      }
    });
  } else {
    console.error("Validation failed", {
      protocol,
      url,
      method,
      successCodes,
      timeoutSeconds,
    });
    callBack(400, {
      message: "Missing required fields or inputs are invalid",
    });
  }
};

handler._check.put = (requestProperties, callBack) => {
  const body = requestProperties.body || {};
  // console.log("PUT /check called", body);

  let id =
    typeof body.id === "string" && body.id.trim().length === 64
      ? body.id.trim()
      : false;

  let protocol =
    typeof body.protocol === "string" &&
    ["http", "https"].includes(body.protocol)
      ? body.protocol
      : false;
  let url =
    typeof body.url === "string" && body.url.trim().length > 0
      ? body.url.trim()
      : false;
  let method =
    typeof body.method === "string" &&
    ["get", "post", "put", "delete"].includes(body.method)
      ? body.method
      : false;
  let successCodes =
    typeof body.successCodes === "object" &&
    Array.isArray(body.successCodes) &&
    body.successCodes.length > 0
      ? body.successCodes
      : false;
  let timeoutSeconds =
    typeof body.timeoutSeconds === "number" &&
    body.timeoutSeconds % 1 === 0 &&
    body.timeoutSeconds >= 1 &&
    body.timeoutSeconds <= 5
      ? body.timeoutSeconds
      : false;

  if (id) {
    if (protocol || url || method || successCodes || timeoutSeconds) {
      data.read("Checks", id, (err, checkData) => {
        if (!err && checkData) {
          const checkObj = { ...parseJson(checkData) };
          const headers = requestProperties.headersObject || {};
          const token =
            typeof headers.token === "string" ? headers.token : false;

          tokenHandler._token.verifyToken(
            token,
            checkObj.phone,
            (tokenIsValid) => {
              if (tokenIsValid) {
                checkObj.protocol = protocol || checkObj.protocol;
                checkObj.url = url || checkObj.url;
                checkObj.method = method || checkObj.method;
                checkObj.successCodes = successCodes || checkObj.successCodes;
                checkObj.timeoutSeconds =
                  timeoutSeconds || checkObj.timeoutSeconds;

                data.update("Checks", id, checkObj, (err1) => {
                  if (err1) {
                    callBack(200, checkObj);
                  } else {
                    callBack(500, { message: "Check update failed" });
                  }
                });
              } else {
                callBack(403, { message: "Authentication failed" });
              }
            }
          );
        } else {
          callBack(404, { message: "Check not found" });
        }
      });
    } else {
      callBack(400, { message: "Nothing to update" });
    }
  } else {
    callBack(400, { message: "Missing required field: id" });
  }
};

handler._check.delete = (requestProperties, callBack) => {
  const id =
    typeof requestProperties.queryStringObject.id === "string" &&
    requestProperties.queryStringObject.id.trim().length === 64
      ? requestProperties.queryStringObject.id.trim()
      : false;

  if (id) {
    data.read("Checks", id, (err, checkData) => {
      if (!err && checkData) {
        const check = parseJson(checkData);
        const token =
          typeof requestProperties.headersObject.token === "string"
            ? requestProperties.headersObject.token
            : false;

        tokenHandler._token.verifyToken(token, check.phone, (tokenIsValid) => {
          if (tokenIsValid) {
            data.delete("Checks", id, (err1) => {
              if (err1) {
                data.read("Users", check.phone, (err2, userData) => {
                  if (!err2 && userData) {
                    const user = { ...parseJson(userData) };
                    const userChecks =
                      typeof user.checks === "object" &&
                      Array.isArray(user.checks)
                        ? user.checks
                        : [];
                        console.log(id);
                    const checkPosition = userChecks.indexOf(id);
                    console.log(checkPosition);
                    if (checkPosition > -1) {
                      userChecks.splice(checkPosition, 1);
                      console.log(userChecks.length);
                      user.checks = userChecks;
                      data.update("Users", check.phone, user, (err3) => {
                        if (err3) {
                          callBack(200, {
                            message: "Check deleted successfully",
                          });
                        } else {
                          callBack(500, { message: "User update failed" });
                        }
                      });
                    } else {
                      callBack(404, { message: "User not found" });
                    }
                  }
                });
              } else {
                callBack(500, { message: "Check deletion failed" });
              }
            });
          } else {
            callBack(403, { message: "Authentication failed" });
          }
        });
      } else {
        callBack(404, { message: "Check not found" });
      }
    });
  } else {
    callBack(400, { message: "Missing required field: id" });
  }
};

module.exports = handler;
