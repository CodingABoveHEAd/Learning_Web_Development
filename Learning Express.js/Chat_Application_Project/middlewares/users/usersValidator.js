const { check, validationResult } = require("express-validator");
const User = require("../../model/people");
const createError = require("http-errors");
const { unlink } = require("fs");
const path = require("path");

const userValidators = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),

  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) throw createError("Email already exists!");
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("mobile")
    .isMobilePhone()
    .withMessage("Mobile number must be a valid Bangladeshi number")
    .custom(async (value) => {
      try {
        const user = await User.findOne({ mobile: value });
        if (user) throw createError("mobile number already exists!");
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
     "Password must be strong and at least 8 characters long"
    ),
];

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    if (req.files && req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(422).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  userValidators,
  addUserValidationHandler,
};
