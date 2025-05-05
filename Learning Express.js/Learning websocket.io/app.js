const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/chat", (req, res) => {
  res.render("index", { title: "Chat App" });
});

io.on("connection", (socket) => {
  // console.log('A new user connected',socket.id);
  socket.on("user-message", (message) => {
    // console.log('A new user message: ',message);
    io.emit("Server_message", {message, serverId: socket.id });
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log(`server running on port 3000`);
});
