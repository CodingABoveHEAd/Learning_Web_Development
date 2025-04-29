const userSchema = require("../schemas/userSchema");
const mongoose = require("mongoose");
const bcrpyt = require("bcrypt");

const User = mongoose.model("User", userSchema);

const saveMongo = async (userDetails) => {
  try {
    userDetails.password = await bcrpyt.hash(userDetails.password, 10);
    await User.create(userDetails);
    console.log("details saved successfully");
  } catch (error) {
    console.log(error);
  }
};

const getMongo = async (res, userDetails) => {
  try {
    const Data = await User.findOne(
      { username: userDetails.username },
      { _id: 0, __v: 0 }
    );
    // console.log(Data);
    const isValid = await bcrpyt.compare(userDetails.password, Data.password);
    if (isValid) {
      const safeData = Data.toObject();
      delete safeData.password;
      res.render("userdetails/getuserform", { user: safeData });
    } else {
      res.status(500).send("<h1>Authentication failed</h1>");
    }
  } catch (error) {
    res.status(500).send("<h1>Authentication failed</h1>");
    console.log(error);
  }
};

const userHandler = (req, res) => {
  if (req.route.path === "/adduser") {
    saveMongo(req.body);
    res.status(200).send("<h1>Successfully submitted</h1>");
  } else {
    getMongo(res, req.body);
  }
};

module.exports = userHandler;
