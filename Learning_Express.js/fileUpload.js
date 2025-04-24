const express = require("express");
const multer = require("multer");

const upload_folder = "./uploads/";

const app = express();
var upload = multer({
  dest: upload_folder,
  limits: {
    fileSize: 1000000,
  },
  fileFilter:(req,file,cb)=>{
    console.log(file);
  }
});

app.post("/", upload.array("avatar", 3), (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
