const { last } = require("lodash");
const data = require("../../lib/data"); //data module import kora holo
const { parseJson, hash } = require("../utilities"); //parseJson,hash function import kora holo

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
  console.log("Query Params:", requestProperties.queryStringObject);

  const phone =
    typeof requestProperties.queryStringObject.phone === "string" &&
    requestProperties.queryStringObject.phone.trim().length === 11
      ? requestProperties.queryStringObject.phone.trim()
      : false;

  //   console.log(requestProperties.queryStringObject);

  if (phone) {
    data.read("users", phone, (err, userData) => {
      const user = { ...parseJson(userData) };
      if (!err && user) {
        delete user.password;
        callBack(200, user);
      } else {
        callBack(404, {
          message: "User not found3",
        });
      }
    });
  } else {
    callBack(404, {
      message: "Requested phone number is not valid4",
    });
  }
};

handler._users.post = (requestProperties, callBack) => {
  const firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName.trim()
      : false;

  const lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName.trim()
      : false;

  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone.trim()
      : false;

  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password.trim()
      : false;

  const tosAgreement =
    typeof requestProperties.body.tosAgreement === "boolean" &&
    requestProperties.body.tosAgreement === true
      ? true
      : false;

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
  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone.trim()
      : false;

  const firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName.trim()
      : false;

  const lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName.trim()
      : false;

  if (phone) {
    if (firstName || lastName) {
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
            console.log("Returned error from update:", err1); // Debug

            if (err1) {
              callBack(200, {
                message: `User with number ${phone} updated successfully`,
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
  const phone =
    typeof requestProperties.queryStringObject.phone === "string" &&
    requestProperties.queryStringObject.phone.trim().length === 11
      ? requestProperties.queryStringObject.phone.trim()
      : false;

  if (phone) {
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
    callBack(400, {
      message: "Phone number doesn't exist",
    });
  }
};

module.exports = handler;
