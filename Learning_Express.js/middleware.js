const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // built-in middleware

// const myMiddleware1 = (req, res, next) => {
//   console.log("Middleware 1 executed");
//   next();
// };

// const myMiddleware2 = (req, res, next) => {
//   console.log("Middleware 2 executed");
//   next();
// };

const adminRouter = express.Router();

// Middleware to check if user is admin
const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()}-${req.method}-${
      req.originalUrl
    }-${req.ip}`
  );
  next();
};

const middlewareWrapper = (options) => (req, res, next) => {
  if (options.log) {
    console.log(
      `${new Date(Date.now()).toLocaleString()}-${req.method}-${
        req.originalUrl
      }-${req.ip}`
    );
    next();
  } else {
    throw new Error("Invalid options provided");
  }
};

adminRouter.use(middlewareWrapper({ log: true }));
adminRouter.get("/dashboard", (req, res) => {
  console.log("Admin Middleware executed");
  res.send("dashboard");
});

// app.use(myMiddleware1);
// app.use(myMiddleware2);
app.use(adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
