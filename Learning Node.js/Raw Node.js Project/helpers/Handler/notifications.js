const https = require("https");
const {twilio}= require("../Environments");
const querystring = require("querystring");


console.log('hi'+twilio);

const notification = {};

notification.sendTwilioSms = (message, phone, callBack) => {
  const userPhone =
    typeof phone === "string" && phone.trim().length === 11
      ? phone.trim()
      : false;
  const userMessage =
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.trim().length <= 1600
      ? message.trim()
      : false;

      if(userMessage && userPhone){
        const payload={
            from: twilio.fromPhone,
            to: `+88${userPhone}`,
            body: userMessage,
        };
        const stringPayload = querystring.stringify(payload); 
        const requestDetails={
            hostname: "api.twilio.com",
            method: "POST",
            path: `/2010-04-01/Accounts/${twilio.accountSid}/Messages.json`,
        
            auth: `${twilio.accountSid}:${twilio.authToken}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(stringPayload),
            },
        };
        const req = https.request(requestDetails, (res) => {
            const status = res.statusCode;
            if(status == 200 || status == 201){
                callBack(false, "Message sent successfully");
            }else{
                callBack(`There was an error while sending the message. Status code: ${status}`);
            }
        });

        req.on("error", (e) => { //error for sending message
            callBack(e);
        });
        req.write(stringPayload); 
        req.end(); 
            
      }else{
        callBack("Given parameters were not correct");
      }
};

module.exports = notification;
