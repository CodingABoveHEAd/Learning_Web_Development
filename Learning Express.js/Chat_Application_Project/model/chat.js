const mongoose = require("mongoose");

const chatSchema =new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    //   trim: true,
    },

    receiver: {
      type: String,
      required: true,
    //   trim: true,
    },

    message: {
      type: String,
    },

  },

  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
