const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./Routers/loginRouter");
const inboxRouter = require("./Routers/inboxRouter");
const usersRouter = require("./Routers/usersRouter");
const {decorateResponse}=require('./middlewares/common/decorateResponse');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Database connection
const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
connectMongo();

app.use("/login",loginRouter);
app.use("/users",usersRouter);
app.use("/inbox",decorateResponse('Inbox'), inboxRouter);

app.use(notFoundHandler);
app.use(errorHandler);
// Start server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
