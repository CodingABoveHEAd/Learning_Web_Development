const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  let cookies =
    req.signedCookies && Object.keys(req.signedCookies).length > 0
      ? req.signedCookies
      : null;
      console.log(cookies);
  if (cookies) {
    console.log('if cookie');
    try {
      const token = cookies[process.env.COOKIE_NAME];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log('hi'+token);
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
    console.log('else2 cookie');
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

module.exports = { checkLogin, redirectLoggedIn };
