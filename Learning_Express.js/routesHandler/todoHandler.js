const express = require("express");
const todoSchema = require("../schemas/todoSchema");
const userSchema = require("../schemas/userSchema");
const mongoose = require("mongoose");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
const Todo = mongoose.model("Todo", todoSchema);

const User = mongoose.model("User", userSchema);

//get active todo's using instance method
router.get("/active", async (req, res) => {
  try {
    const todo = new Todo();
    const data = await todo.findActive();
    console.log(data);
    res.status(200).json({
      data,
      message: "All active users successfully displayed",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

//get todo's containing js in title using static method
router.get("/js", async (req, res) => {
  try {
    const data = await Todo.findByJs();
    console.log(data);
    res.status(200).json({
      data,
      message: "All users with title containing Js successfully displayed",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

//get active todo's using instance method
router.get("/language", async (req, res) => {
  try {
    // const todo = new Todo();
    const data = await Todo.find().byLanguage("learn");
    console.log(data);
    res.status(200).json({
      data,
      message: "All active users successfully displayed",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.get("/", checkLogin, async (req, res) => {
  try {
    const data = await Todo.find({}).populate("user");
    res.status(200).json({
      data,
      message: "Todo was displayed successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Todo.find({ _id: req.params.id }, { _id: 0, __v: 0 });
    res.status(200).json({
      data,
      message: "Todo was inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.post("/", checkLogin, async (req, res) => {
  //   const newTodo = new todo(req.body);
  const data = { ...req.body };
  data.user = req.userId;

  try {
    const td = await Todo.create(data);
    await User.updateOne({ _id: req.userId }, 
      { $push: { todos: td._id } });
    res.status(200).json({
      message: "Todo was saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      error: "All todos saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          description: "Learning C# is awesome(updated)",
        },
      }
    );
    res.status(200).json({
      message: "Todo was updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Todo was deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

module.exports = router;
