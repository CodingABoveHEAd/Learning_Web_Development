const express = require("express");
const multer = require("multer");
const path=require('path');


const app = express();
const upload_folder = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, upload_folder);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname.replace(fileExt).toLowerCase().split(" ").join("-") +
      "-" +
      Date.now().toLocaleString();
    cb(null, fileName + fileExt);
  },
});


var upload = multer({
  storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    // console.log(file);
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("only .jpg, .png, .jpeg format allowed"));
    }
  },
});

app.post("/", upload.array("avatar", 3), (req, res) => {
  res.send("File upload successful");
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.send("No error found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
