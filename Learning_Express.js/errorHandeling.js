const express = require("express");
const app = express();
const fs = require("fs");

app.get("/user", (req, res, next) => {
  setTimeout(() => {
    try {
        console.log(a);
    } catch (err) {
        next(err);
    }
  }, 100);
});

// //No file in directory error
// fs.readFile("/nofile.txt", (err, data) => {
//     if (err) {
//       next(err);
//     } else {
//       res.send(data);
//     }
//   });

app.use((err, req, res, next) => {
  if (res.headersSent) {
    res.status(500).send("Internal Server Error");
  } else {
    if (err.message) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was an error");
    }
  }
});

// //404 error handler
// app.use(( req, res, next) => {
//     // res.status(404).send('request not found');
//     next('Requested url not found');
// });

// app.use((err, req, res, next) => {
//   if (err.message) {
//     console.log(err);
//     res.status(500).send(err.message);
//   } else {
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
