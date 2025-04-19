const data = require("../../lib/data"); //data module import kora holo
const { parseJson, hash } = require("../utilities"); //parseJson,hash function import kora holo
const details = require("../details");

const handler = {};

handler.tokenHandle = (requestProperties, callBack) => {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._token[requestProperties.method](requestProperties, callBack); //method er modhye jodi acceptedMethods er modhye thake tahole _token er modhye method call kora hobe
  } else {
    callBack(405, {
      message: "Method not allowed",
    });
  }
};

handler._token = {}; //handler er _token object er modhye _token property create kora holo

handler._token.get = (requestProperties, callBack) => {
  //get for get user data
  const tokenId =
    typeof requestProperties.queryStringObject.tokenId === "string" && //phone number ta details.js theke nise
    requestProperties.queryStringObject.tokenId.trim().length === 64
      ? requestProperties.queryStringObject.tokenId.trim()
      : false;

  if (tokenId) {
    data.read("Tokens", tokenId, (err, tokenData) => {
      const token = { ...parseJson(tokenData) };
      if (!err && token) {
        callBack(200, token);
      } else {
        callBack(404, {
          message: "Requested token was not found",
        });
      }
    });
  } else {
    callBack(404, {
      message: "Requested phone number is not valid",
    });
  }
};

handler._token.post = (requestProperties, callBack) => {
  //post for create a new user token
  const phone = details.Phone(requestProperties);
  const password = details.Password(requestProperties);
  console.log(phone);

  if (phone && password) {
    data.read("Users", phone, (err1, userData) => {
      const user = { ...parseJson(userData) };
      if (!err1 && user) {
        if (user.password === hash(password)) {
          const tokenId = hash(Math.random().toString(36).substring(2, 15)); //token id generate kora holo
          const expires = Date.now() + 1000 * 60 * 60; //1 hour er jonno token ta valid thakbe
          const tokenObject = {
            phone,
            tokenId,
            expires,
          };
          //store the token to the database
          //store the user to db
          data.create("Tokens", tokenId, tokenObject, (err2) => {
            if (!err2) {
              callBack(200, {
                message: "Token was created successfully",
              });
            } else {
              // console.log('File creation error:', err1);
              callBack(500, {
                message: err2,
              });
            }
          });
        } else {
          callBack(404, {
            message: "Requested user was not found",
          });
        }
      }
    });
  } else {
    callBack(404, {
      message: "Requested phone number is not valid",
    });
  }
};

handler._token.put = (requestProperties, callBack) => {
  //put for update user data

  const tokenId =
    typeof requestProperties.body.tokenId === "string" &&
    requestProperties.body.tokenId.trim().length === 64
      ? requestProperties.body.tokenId.trim()
      : false;
  const extend = requestProperties.body.extend === true ? true : false; //extend er value check kora holo
  if (tokenId && extend) {
    data.read("Tokens", tokenId, (err, tokenData) => {
      const token = { ...parseJson(tokenData) };

      // console.log('1: ' + token.expires);
      // console.log('2: ' + Date.now());

      if (!err && token) {
        if (token.expires > Date.now()) {
          token.expires = Date.now() + 1000 * 60 * 60; //store the updated token to the database
          //store the token to the database
          data.update("Tokens", tokenId, token, (err2) => {
            if (err2) {
              callBack(200, {
                message: "Token was updated successfully",
              });
            } else {
              callBack(500, {
                message: err2,
              });
            }
          });
        } else {
          callBack(404, {
            message: "Token already expired",
          });
        }
      } else {
        callBack(404, {
          message: "Requested token was not found",
        });
      }
    });
  } else {
    callBack(404, {
      message: "Requested token id is not valid",
    });
  }
};

handler._token.delete = (requestProperties, callBack) => {
  //delete for delete user data
  const tokenId =
      typeof requestProperties.queryStringObject.tokenId === "string" &&
      requestProperties.queryStringObject.tokenId.trim().length === 64
        ? requestProperties.queryStringObject.tokenId.trim()
        : false;
  
    if (tokenId) {
      data.read("Tokens",tokenId, (err, userToken) => {
        if (!err && userToken) {
          data.delete("Tokens", tokenId, (err1) => {
            if (err1) {
              callBack(200, {
                message: "Token deleted successfully",
              });
            } else {
              callBack(500, {
                message: "There was a problem in the server side",
              });
            }
          });
        } else {
          callBack(404, {
            message: "Token not found",
          });
        }
      });
    } else {
      callBack(400, {
        message: "Token doesn't exist",
      });
    }
};

handler._token.verifyToken = (tokenId, phone, callBack) => {
  //verify token er jonno
  data.read("Tokens", tokenId, (err, tokenData) => {
    const token = { ...parseJson(tokenData) };
    if (!err && token) {
      if (token.phone === phone && token.expires > Date.now()) {
        callBack(true);
      } else {
        callBack(false);
      }
    } else {
      callBack(false);
    }
  });
}

module.exports = handler;
