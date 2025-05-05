const express = require("express");
const { Server } = require("socket.io");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/chat2", (req, res) => {
  res.render("index2", {
    title: "Private chat",
  });
});

const allUsers = {}; // username -> socket.id

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("register", ({ username }) => {
    if (username) {
      allUsers[username] = socket.id;
      console.log(`Registered: ${username} -> ${socket.id}`);
    }
  });

  socket.on("private-message", ({ toUsername, message }) => {
    const targetSocketId = allUsers[toUsername];
    const fromUsername = getUsernameBySocketId(socket.id);

    if (targetSocketId) {
      io.to(targetSocketId).emit("Server_message", {
        message,
        fromUsername,
      });
      console.log(`Message from ${fromUsername} to ${toUsername}: ${message}`);
    } else {
      socket.emit("Server_message", {
        message: `User ${toUsername} not found.`,
        fromUsername: "Server",
      });
    }
  });

  socket.on("disconnect", () => {
    const username = getUsernameBySocketId(socket.id);
    if (username) {
      delete allUsers[username];
      console.log(`User disconnected: ${username}`);
    }
  });
});

function getUsernameBySocketId(socketId) {
  return Object.keys(allUsers).find(
    (username) => allUsers[username] === socketId
  );
}

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
