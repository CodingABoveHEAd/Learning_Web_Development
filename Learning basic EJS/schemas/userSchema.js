const express = require("express");
const mongoose = require("mongoose");

let cnt = 0;

const userSchema =new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      default: `user${cnt++}`,
    },
    email: {
      type: String,
      required: true,
      tolowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      default: "User hasn't entered any note",
    },
  },
  {
    timestamps: true,
  }
);

module.exports=userSchema;