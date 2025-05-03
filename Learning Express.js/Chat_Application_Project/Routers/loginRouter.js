const express = require("express");
const { getLogin, login, logout } = require("../controllers/loginController");
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const {
  doLoginValidationHandler,
  doLoginValidators,
} = require("../middlewares/login/loginValidators");

const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

const page_title = "Login";

const router = express.Router();

router.get("/", decorateResponse(page_title), getLogin);

router.post(
  "/",
  decorateResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

router.delete("/", logout);

module.exports = router;
