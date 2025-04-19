const data = require("../../lib/data"); //data module import kora holo
const { parseJson, hash } = require("../utilities"); //parseJson,hash function import kora holo
const details = require("../details");
const tokenHandler = require("./tokenHandler");

const handler = {};

handler.userHandle = (requestProperties, callBack) => {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._users[requestProperties.method](requestProperties, callBack); //method er modhye jodi acceptedMethods er modhye thake tahole _users er modhye method call kora hobe
  } else {
    callBack(405, {
      message: "Method not allowed",
    });
  }
};

handler._users = {}; //handler er _users object er modhye _users property create kora holo

handler._users.get = (requestProperties, callBack) => {
  //get for get user data
  const phone =
    typeof requestProperties.queryStringObject.phone === "string" && //phone number ta details.js theke nise
    requestProperties.queryStringObject.phone.trim().length === 11
      ? requestProperties.queryStringObject.phone.trim()
      : false;

  if (phone) {
    //verify token
    const token =
      typeof requestProperties.headersObject.token === "string"
        ? requestProperties.headersObject.token
        : false;

    tokenHandler._token.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        data.read("users", phone, (err, userData) => {
          const user = { ...parseJson(userData) };
          if (!err && user) {
            delete user.password;
            callBack(200, user);
          } else {
            callBack(404, {
              message: "Requested user was not found",
            });
          }
        });
      } else {
        callBack(403, { message: "Authentication failed" });
      }
    });
  } else {
    callBack(404, {
      message: "Requested phone number is not valid",
    });
  }
};

handler._users.post = (requestProperties, callBack) => {
  //post for create a new user
  const firstName = details.FirstName(requestProperties);
  const lastName = details.LastName(requestProperties);
  const phone = details.Phone(requestProperties);
  const password = details.Password(requestProperties);
  const tosAgreement = details.TosAgreement(requestProperties);

  if (firstName && lastName && phone && password && tosAgreement) {
    //make sure that the user doesnt already exist
    //store user data
    data.read("Users", phone, (err) => {
      if (err) {
        const userObject = {
          firstName,
          lastName,
          phone,
          password: hash(password), //hash password
          tosAgreement,
        };
        //store the user to db
        data.create("Users", phone, userObject, (err1) => {
          if (!err1) {
            callBack(200, {
              message: "User was created successfully",
            });
          } else {
            // console.log('File creation error:', err1);
            callBack(500, {
              message: err1,
            });
          }
        });
      } else {
        callBack(500, {
          message: "There was a problem in the server side",
        });
      }
    });
  } else {
    callBack(400, {
      message: "You have a problem in your request", //400 error for bad request
    });
  }
};

handler._users.put = (requestProperties, callBack) => {
  //put for updating user data
  const phone = details.Phone(requestProperties); //phone number ta details.js theke nise
  const firstName = details.FirstName(requestProperties); //first name ta details.js theke nise
  const lastName = details.LastName(requestProperties); //last name ta details.js theke nise

  if (phone) {
    if (firstName || lastName) {
      const token =
        typeof requestProperties.headersObject.token === "string"
          ? requestProperties.headersObject.token
          : false;

      tokenHandler._token.verifyToken(token, phone, (tokenIsValid) => {
        if (tokenIsValid) {
          data.read("Users", phone, (err, userData) => {
            const user = { ...parseJson(userData) };
            if (!err && user) {
              if (firstName) {
                user.firstName = firstName;
              }
              if (lastName) {
                user.lastName = lastName;
              }

              //store the updated data to db
              data.update("users", phone, user, (err1) => {
                if (err1) {
                  callBack(200, {
                    message: `User with phone number ${phone} updated successfully`,
                  });
                } else {
                  callBack(500, {
                    message: "There was a problem in the server side1",
                  });
                }
              });
            } else {
              callBack(400, {
                message: "You have a problem in your request",
              });
            }
          });
        } else {
          callBack(403, { message: "Authentication failed" });
        }
      });
    } else {
      callBack(400, {
        message: "You have a problem in your request",
      });
    }
  } else {
    callBack(400, {
      message: "invalid phone number",
    });
  }
};

handler._users.delete = (requestProperties, callBack) => {
  //delete for deleting user data

  const phone =
    typeof requestProperties.queryStringObject.phone === "string" &&
    requestProperties.queryStringObject.phone.trim().length === 11
      ? requestProperties.queryStringObject.phone.trim()
      : false;

  if (phone) {
    const token =
      typeof requestProperties.headersObject.token === "string"
        ? requestProperties.headersObject.token
        : false;

    tokenHandler._token.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        data.read("Users", phone, (err, userData) => {
          if (!err && userData) {
            data.delete("users", phone, (err1) => {
              if (err1) {
                callBack(200, {
                  message: "User deleted successfully",
                });
              } else {
                callBack(500, {
                  message: "There was a problem in the server side",
                });
              }
            });
          } else {
            callBack(404, {
              message: "User not found",
            });
          }
        });
      } else {
        callBack(403, { message: "Authentication failed" });
      }
    });
  } else {
    callBack(400, {
      message: "Phone number doesn't exist",
    });
  }
};

module.exports = handler;
