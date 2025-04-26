const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routesHandler/todoHandler");

const app = express();

app.use(express.json());

//database connection with mongoose
async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost/tools");
    console.log("Successfully connected to mongodb");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
}

connectToDB();

app.use("/todo", todoHandler);

errorHandler = (err, req, res, next) => {
  if (err.headersSent) {
    return next();
  } else {
    res.status(500).json({ error: err });
  }
};

app.listen(3000, () => {
  console.log("app listening on 3000 port");
});
