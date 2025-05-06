const express = require("express");
const { getInbox } = require("../controllers/inboxController");
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");
const router = express.Router();
const User = require("../model/people");
const chatPeople = require("../model/chatPeople");
const { route } = require("./loginRouter");

router.get("/", decorateResponse("inbox"), checkLogin, getInbox);

// Add user to chat list
router.get(
  "/addUser/:name/:mobile",
  decorateResponse("inbox"),
  checkLogin,
  async (req, res) => {
    const { name, mobile } = req.params;
    const loggedInUser = res.locals.loggedInUser;
    console.log(name);
    try {
      const user = await User.findOne({
        name: name,
        mobile: mobile,
      });

      let users = await chatPeople.find({
        From: loggedInUser.username,
      });

      if (!user) {
        return res.render("inbox", {
          users,
          errors: {
            common: {
              msg: "No user found.",
            },
          },
        });
      }

      const alreadyExists = await chatPeople.findOne({
        From: loggedInUser.username,
        Tomobile: mobile,
      });

       users = await chatPeople.find({
        From: loggedInUser.username,
      });

      if (alreadyExists) {
        return res.render("inbox", {
          users,
          errors: {
            common: {
              msg: "User already added.",
            },
          },
        });
      }
      console.log(user);

      const chatPeopleObj = {
        From: loggedInUser.username,
        Toname: user.name,
        Tomobile: user.mobile,
        Toavatar: user.avatar,
      };

      await chatPeople.create(chatPeopleObj);
      res.render("inbox", {
        users,
      });
    } catch (error) {
      res.render("inbox", {
        users: [],
        errors: {
          common: {
            msg: error.message,
          },
        },
      });
    }
  }
);

router.get(
  "/allusers",
  decorateResponse("inbox"),
  checkLogin,
  async (req, res) => {
    try {
      const users = await chatPeople.find();
      //   console.log(users);
      res.render("inbox", { users });
      windows.location.reload();
    //   console.log(users);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
