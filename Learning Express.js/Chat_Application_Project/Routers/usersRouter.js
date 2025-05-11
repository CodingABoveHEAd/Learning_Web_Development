const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controllers/usersController");
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const {
  checkLogin,
  redirectLoggedIn,
  requireRole,
} = require("../middlewares/common/checkLogin");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  userValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidator");

const router = express.Router();

router.get(
  "/",
  decorateResponse("Users"),
  checkLogin,
  requireRole(["admin"]),
  getUsers
);

router.post(
  "/",
  checkLogin,
  requireRole(["admin"]),
  avatarUpload,
  userValidators,
  addUserValidationHandler,
  addUser
);

router.delete("/:id", removeUser);

module.exports = router;
