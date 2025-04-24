const express = require("express");
const adminRouter = require("./adminRouter.js");
const publicRouter = require("./publicRouter.js");
const app = express(); //this app contains a built in router

app.use("/admin", adminRouter); //this is a middleware
app.use("/public", publicRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
