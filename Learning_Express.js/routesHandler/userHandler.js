const express = require("express");
const userSchema = require("../schemas/userSchema");
const mongoose = require("mongoose");
const { hash } = require("../utilities/passwordHashing");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// console.log(typeof hash);
const User = mongoose.model("User", userSchema);

const router = express.Router();

//get active todo's using instance method
router.post("/signup", async (req, res) => {
  console.log(req.body);
  const data = { ...req.body };
  console.log(req.body);
  // data.password=hash(data.password);
  try {
    data.password = await bcrypt.hash(data.password, 10);
    await User.create(data);
    // console.log(hash(req.body.password));
    res.status(200).json({
      message: "user was created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Signup failed",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ name: req.body.name });
    if (user[0] && user.length > 0) {
      const valid = await bcrypt.compare(req.body.password, user[0].password);
      if (valid) {
        //generate token
        const token = jwt.sign(
          {
            username: user[0].userName,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        res.status(200).json({
          access_token: token,
          message: "Login successful",
        });
      } else {
        res.status(401).json({
          error: "login failed",
        });
      }
    } else {
      res.status(401).json({
        error: "login failed",
      });
    }
  } catch {
    res.status(401).json({
      error: "authentication failed",
    });
  }
});

router.get("/allTodo", async (req, res) => {
  try {
    const users = await User.find({ status: "active" }).
    populate("todos");
    res.status(200).json({
      data:users,
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "There was an error",
    });
  }
});

module.exports = router;
