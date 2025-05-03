const bcrypt = require("bcrypt");
const User = require("../model/people");
const path = require("path");
const {unlink}=require('fs');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.render("users", {
      users,
    });
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    const newUser = { ...req.body };
    newUser.password = hashPassword;

    if (req.files && req.files.length > 0) {
      newUser.avatar = req.files[0].filename;
    }

    await User.create(newUser);
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    re.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
};

removeUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });
    if (user.avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(200).json({
      message: "User was removed successfully!",
    });
  } catch (error) {
    errors: {
      common: {
        msg: "could not delete the user!";
      }
    }
  }
};

module.exports = {
  getUsers,
  addUser,
  removeUser,
};
