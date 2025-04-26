const jwt=require('jsonwebtoken');

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      const { username, userId } = decoded;
      req.username = username;
      req.userId = userId;
      next();
    } else {
      res.status(401).json({
        error: "error occured",
      });
    }
  } catch (error) {
    next("Authentication error");
  }
};

module.exports = checkLogin;
