const utilities = {};
const crypto = require("crypto");


utilities.hash = (password) => {
  let p = "",i;
  // console.log(typeof password);
  if (typeof password === "string" && password.length > 0) {
    const hash = crypto
      .createHmac("sha256", "uewy74tr7skbv") //environment er secret key use kora holo
      .update(password)
      .digest("hex");
    for (i = 20; i < 35; i++) {
      p += hash[i];
    }
    return p;
  } else {
    return false;
  }
};

module.exports = utilities;
