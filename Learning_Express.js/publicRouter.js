const express = require("express");
const publicRouter = express.Router();

// const log = (req, res, next) => {
//   console.log(
//     `${new Date(Date.now()).toLocaleString()}-${req.method}-${
//       req.originalUrl
//     }-${req.ip}`
//   );
//   next();
// };

// publicRouter.use(log); //this is a middleware
// // publicRouter.all('*',log);

// publicRouter.param("id", (req, res, next, id) => {
//   req.id = id === "1" ? "admin" : "user"; //user can be selected on hte basis of parameter
//   next();
// });

// publicRouter.get("/about/:id", (req, res) => {
//   res.send(`this is home page of ${req.id} Router`);
// });

// publicRouter.param((param, option) => (req, res, next, value) => {
//   if (option === value) {
//     req.id = value;
//     next();
//   } else {
//     res.status(404).send("not found");
//   }
// });

// publicRouter.param('user', '117'); //(Jhamela ache)

// publicRouter.get("/:user", (req, res) => {
//   res.send(`Hello Admin,your id is ${req.id}`);
// });

// publicRouter.get("/about", (req, res) => {
//   res.send("this is about page of public Router");
// });

// //Router chaining for different methods
// publicRouter
//   .route("/user")
//   .all((req, res, next) => {
//     console.log(`I am logging in ${req.method} method`);
//     next();
//   })
//   .get((req, res) => {
//     res.send(`this is ${req.method} method of user route`);
//   })
//   .post((req, res) => {
//     res.send(`this is ${req.method} method of user route`);
//   })
//   .put((req, res) => {
//     res.send(`this is ${req.method} method of user route`);
//   })
//   .delete((req, res) => {
//     res.send(`this is ${req.method} method of user route`);
//   });

module.exports = publicRouter;
