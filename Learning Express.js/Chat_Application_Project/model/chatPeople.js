const mongoose = require("mongoose");

const peopleSchema =new mongoose.Schema(
  {
    From: {
      type: String,
      required: true,
      trim: true,
    },

    Toname: {
      type: String,
      requierd: true,
      trim: true,
    },

    Tomobile: {
      type: String,
      requierd: true,
      trim: true,
    },

    Toavatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const chatpeople = mongoose.model("chatPeople", peopleSchema);

module.exports = chatpeople;
