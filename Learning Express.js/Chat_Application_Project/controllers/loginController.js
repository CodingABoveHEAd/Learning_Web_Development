// const { compare } = require("bcrypt");
const User = require("../model/people");
const chatPeople=require('../model/chatPeople');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

getLogin = (req, res, next) => {
  res.render("index");
};

const login = async (req, res, next) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };
        const token = jwt.sign(userObject, process.env.SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRE,
          httpOnly: true,
          signed: true,
        });
        res.locals.loggedInUser = userObject;

        const users = await chatPeople.find({ From: user.name });
        res.render("inbox", {
          users,
        });

      } else {
        throw createError("Wrong/invalid password!");
      }
    } else {
      throw createError("User not found!");
    }
  } catch (error) {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

const logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("Logged out");
};

module.exports = {
  getLogin,
  login,
  logout,
};
