const createError = require("http-errors");

function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content not found"));
}

//default error handler
function errorHandler(error, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development"
      ? error
      : {
          message: error.message,
        };
  res.status(error.status || 500);
  if (!res.locals.html) {
    res.render("error", {
      title: "error page",
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
