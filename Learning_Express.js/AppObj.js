const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();
// app.use();

app.enable('case sensitive routing');

app.set("view engine", "ejs");

app.route("/about/content")
  .get((req, res) => {
    req.hostname = "niloy";
    res.render('pages/about');
  })
  .post((req, res) => {
    res.send("this is post method");
  })
  .delete((req, res) => {
    res.send("this is delete method");
  });

// app.param('id', (req, res, next, id) => {
//   const user={
//      id,
//     name: "John Doe",
//   };
//   req.userdet=user;
//   next();
// });

// app.all('/About/:id',(req,res)=>{
//   console.log(req.userdet);
//   res.send(req.userdet);
// })

// app.set('title', 'My Site');
// console.log(app.get('title')); // My Site

// app.get("/", (req, res) => {
//   res.send("this is get method");
// });

// router.post("/About", (req, res) => {
//   res.send("this is post method");
// });

// app.delete("/", (req, res) => {
//   res.send("this is delete method");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
