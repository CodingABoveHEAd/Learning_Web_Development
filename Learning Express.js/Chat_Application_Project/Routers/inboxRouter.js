const express = require("express");
const { getInbox } = require("../controllers/inboxController");
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");
const router = express.Router();
const User = require("../model/people");
const chatPeople = require("../model/chatPeople");
const Chat = require("../model/chat");

router.get("/", decorateResponse("inbox"), checkLogin, getInbox);

// Add user to chat list
router.get(
  "/addUser/:name/:mobile",
  decorateResponse("inbox"),
  checkLogin,
  async (req, res) => {
    const { name, mobile } = req.params;
    const loggedInUser = res.locals.loggedInUser;
    // console.log(name);
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
          allMessages: [],
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
          allMessages: [],
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
        allMessages: [],
        users,
      });
    } catch (error) {
      res.render("inbox", {
        allMessages: [],
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
      const loggedInUser = res.locals.loggedInUser;
      const users = await chatPeople.find({ From: loggedInUser.username });
      //   console.log(users);
      res.render("inbox", {
        allMessages: [],
        users,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

router.get(
  "/chats",
  decorateResponse("inbox"),
  checkLogin,
  async (req, res) => {
    const { sender, receiver } = req.query;

    try {
      const allMessages = await Chat.find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      })
        .sort({ createdAt: 1 })
        .lean();

      const loggedInUser = res.locals.loggedInUser;

      // If it's an AJAX request, return raw HTML string
      if (req.xhr) {
        const html =
          allMessages
            .map((Msg) => {
              if (loggedInUser.mobile === Msg.sender) {
                return `<p class="message own-message">${Msg.message}</p>`;
              } else {
                return `<p class="message other-message">${Msg.message}</p>`;
              }
            })
            .join("") || "<p>Select a Conversation</p>";

        return res.send(html);
      }

      const users = await chatPeople.find({ From: loggedInUser.username });

      res.render("inbox", {
        users,
        allMessages,
        loggedInUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error loading messages");
    }
  }
);

module.exports = router;
