const express = require("express");
const env = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const userHandler = require("./useHandlers/userHandler");

env.config();

const app = express();
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp");
    console.log("Successfully connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
};

connectMongo();

const languages = ["c", "c++", "java", "python"];

app.get("/", (req, res) => {
  res.render("store", {
    name: "niloy",
    roll: "2107117",
    det: "User doesn't know any languages",
    languages,
  });
});

app.post("/", (req, res) => {
  console.log(typeof req.body);
  languages.push(req.body.languages);
  res.redirect("/");
});

app.get("/adduser", (req, res) => {
  res.render("userdetails/adduserform");
});

app.post("/adduser", userHandler);


app.get("/getuser", (req, res) => {
  // console.log(req.body);
  res.render("userdetails/getuserform",{user:null});
});

app.post("/getuser", userHandler);

// app.post('/')

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server listening at port ${process.env.PORT_NUMBER}`);
});
