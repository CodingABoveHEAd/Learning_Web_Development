const utilities = {};
const crypto = require("crypto"); //hashing module
const environments = require("./Environments"); //environment module

//parse JSON string to object
utilities.parseJson = (jsonString) => {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    console.error("JSON parsing failed:", error.message); 
    return {};
  }
};


//hashing function
utilities.hash = (password) => {
  if (typeof password === "string" && password.length > 0) {
    const hash = crypto
      .createHmac("sha256", environments.secretKey) //environment er secret key use kora holo
      .update(password)
      .digest("hex");
    return hash;
  } else {
    return false;
  }
};

module.exports = utilities;
