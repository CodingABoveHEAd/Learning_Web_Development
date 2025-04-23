const express = require("express");
const cookieParser = require("cookie-parser");
const handler=require('./handler');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.protocol);
  res.send("this is admin dashboard route");
});

app.use("/admin", adminRoute);
//base url--> /admin
//original url--> /admin/dashboard
//path--> /dashboard
//hostname--> localhost:3000
//method--> get

app.get("/user/:id/:id2", handler);

app.post("/use", (req, res) => {
  // console.log(req.body);
  console.log(req.app);
  console.log(req.cookies);
  res.send(req.cookies);
});

//baseurl--> empty
//original url--> /user/1/2
//path--> /user/1/2
//hostname--> localhost:3000
//method--> get(same)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
