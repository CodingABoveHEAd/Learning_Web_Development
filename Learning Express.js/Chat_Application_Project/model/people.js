const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      requierd: true,
      lowerCase: true,
    },
    phone: {
      type: String,
      requierd: true,
    },
    password: {
      type: String,
      requierd: true,
    },
    avatar: {
      type: String,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timeStamps: true,
  }
);

const people = mongoose.model("People", peopleSchema);

module.exports = people;
