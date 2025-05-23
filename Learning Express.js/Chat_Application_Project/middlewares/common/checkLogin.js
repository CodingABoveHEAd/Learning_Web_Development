const jwt = require("jsonwebtoken");
const createError = require("http-errors");



const checkLogin = (req, res, next) => {
  let cookies =
    req.signedCookies && Object.keys(req.signedCookies).length > 0
      ? req.signedCookies
      : null;
  // console.log(cookies);
  if (cookies) {
    // console.log('if cookie');
    try {
      const token = cookies[process.env.COOKIE_NAME];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      // console.log(decoded);
      //console.log('hi'+token);
      req.user = decoded;

      if (res.locals.html) {
        res.locals.loggedInUser = decoded;
      }
      next();
    } catch (err) {
      console.log(err);
      if (res.locals.html) {
        res.redirect("/login");
      } else {
        res.status(401).json({
          errors: {
            common: {
              msg: "Authentication failure",
            },
          },
        });
      }
    }
  } else {
    //console.log('else2 cookie');
    if (res.locals.html) {
      res.redirect("/login");
    } else {
      res.status(401).json({
        errors: {
          common: {
            msg: "Authentication failure",
          },
        },
      });
    }
  }
};

// const jwt = require("jsonwebtoken");

const redirectLoggedIn = function (req, res, next) {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  if (!cookies) {
    next();
  } else {
    res.redirect("/inbox");
  }
};

const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role && role.includes(req.user.role)) {
      next();
    } else {
      if (res.locals.html) {
        next(createError(401, "You are not authorized to access thie page!"));
      } else {
        res.status(401).json({
          errors: {
            common: {
              msg: "You are not authorized",
            },
          },
        });
      }
    }
  };
};

module.exports = { checkLogin, redirectLoggedIn,requireRole};
