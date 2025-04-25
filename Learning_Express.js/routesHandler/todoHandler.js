const express = require("express");
const todoSchema = require("../schemas/todoSchema");
const mongoose = require("mongoose");
const todo = new mongoose.model("Todo", todoSchema);

const router = express.Router();

// router.get("/", async (req, res) => {});

router.get("/", async (req, res) => {
  try {
    const data = await todo.find({ status: "active" }, { _id: 0, __v: 0 });
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

router.get("/:id", async (req, res) => {
  try {
    const data = await todo.find({ _id: req.params.id }, { _id: 0, __v: 0 });
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

router.post("/", async (req, res) => {
  //   const newTodo = new todo(req.body);

  try {
    await todo.create(req.body);
    res.status(200).json({
      message: "Todo was inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Server side error",
    });
  }
});

router.post("/all", async (req, res) => {
  try {
    await todo.insertMany(req.body);
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
    await todo.updateOne(
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
    await todo.deleteOne({ _id: req.params.id });
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
