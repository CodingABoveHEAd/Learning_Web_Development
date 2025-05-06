const chatPeople = require("../model/chatPeople");

async function getInbox(req, res, next) {
  const loggedInUser = res.locals.loggedInUser;

  try {
    const users = await chatPeople.find({
      From: loggedInUser.username,
    });

    res.render("inbox", {
      users,
    });
  } catch (err) {
    res.render("inbox", {
      users: [],
      errors: {
        common: {
          msg: "Something went wrong!",
        },
      },
    });
  }
}

module.exports = {
  getInbox,
};
