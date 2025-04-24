const express = require("express");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  // res.sendStatus(200);
  res.cookie("name", "Niloy Chowdhury");
  // res.location('/test');
  res.set("Nishan", "Schoolboy");
  res.set("Niloy", "Varcityboy");
  console.log(res.get("Nishan"));
  res.end();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// console.log(req.query);
//     res.render('pages/about',{
//         Name:req.query.name,
//         Age:req.query.age,
//     });

//res.send()-->close response with data
//res.end()--->close response without data

// res.status(200);
// res.json({
//     name: "John Doe",
//     age: 30,
//     city: "New York",
// });
// res.send('Check the status code 205');
