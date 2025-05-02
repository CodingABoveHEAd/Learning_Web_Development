const { compare } = require("bcrypt");
const { User } = require("../model/people");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

getLogin = (req, res, next) => {
  res.render("index");
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.mobile }],
    });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        user.password,
        req.body.password
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
        res.cookie(COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRE,
          httpOnly: true,
          signed: true,
        });
        res.locals.loggedInUser = userObject;
        res.render("inbox");
      } else {
        throw createHttpError("Login failed!Try again later");
      }
    } else {
      throw createHttpError("Login failed!Try again later");
    }
  } catch (error) {
    res.render("index", {
      errors: {
        data: {
          username: req.body.username,
        },
        common: {
          msg: error.message,
        },
      },
    });
  }
};

module.exports = {
  getLogin,
  login,
};
