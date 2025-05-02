const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controllers/usersController");
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  userValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidator");

const router = express.Router();

router.get("/", decorateResponse("Users"), getUsers);

router.post(
  "/",
  avatarUpload,
  userValidators,
  addUserValidationHandler,
  addUser
);

router.delete("/:id", removeUser);

module.exports = router;
