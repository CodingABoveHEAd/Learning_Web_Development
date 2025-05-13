const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.render("temp", {
    title: "Learn Ajax requests",
  });
});

app.get("/formdata/:mob", (req, res) => {
  const { mob } = req.params;
  console.log(mob);
  const payload = {
    name: "niloy",
    mobile: mob,
  };
  res.json(payload);
});

app.post("/formdata", (req, res) => {
  console.log("post" + req.body);
  // const {name,mobile}=req.body;
  // console.log(name);
  // console.log(mobile);
  res.json(req.body);
});

app.put("/formdata", (req, res) => {
  console.log('put'+req.body);
  res.json(req.body);
});

app.delete("/formdata", (req, res) => {
    console.log('delete'+req.body);
    res.json({message:'all the information deleted successfully'});
});

app.listen(3000, () => {
  console.log("server running at 3000 port");
});
