const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const Chat = require("./model/chat");

const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./Routers/loginRouter");
const inboxRouter = require("./Routers/inboxRouter");
const usersRouter = require("./Routers/usersRouter");
const { decorateResponse } = require("./middlewares/common/decorateResponse");
const { create } = require("lodash");

dotenv.config();
const app = express();

const server = http.createServer(app);
const io = new Server(server);

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

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

const users = {};

io.on("connection", (socket) => {
  socket.on("register", (mobile) => {
    users[mobile] = socket.id;
    socket.mobile = mobile;
    console.log("Registered:", mobile);
  });

socket.on("one_message", async ({ msg, selectedReceiver }) => {
  const receiverMobile = selectedReceiver?.mobile;
  const senderMobile = socket.mobile;

  const payload = {
    msg,
    senderMobile,
    receiverMobile
  };

  const recId = users[receiverMobile];
  if (recId) {
 
    io.to(recId).emit("other_message", payload);
  }

  socket.emit("own_message", payload);

  // Save to DB
  try {
    await Chat.create({
      sender: senderMobile,
      receiver: receiverMobile,
      message: msg,
    });
  } catch (err) {
    console.error("Chat saving error:", err.message);
  }
});

  
  socket.on("disconnect", () => {
    for (const mobile in users) {
      if (users[mobile] === socket.id) {
        delete users[mobile];
        break;
      }
    }
  });
});

app.use(notFoundHandler);
app.use(errorHandler);
// Start server
server.listen(process.env.PORT,'0.0.0.0', () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
