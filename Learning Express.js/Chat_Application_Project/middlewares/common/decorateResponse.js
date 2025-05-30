const decorateResponse = (title) => {
  return (req, res, next) => {
    res.locals.html = true;
    res.locals.title = `${title}-${process.env.APP_NAME}`;
    res.locals.loggedInUser = {};
    res.locals.errors = {};
    res.locals.data = {};
    next();
  };
};

module.exports = {
  decorateResponse,
};
