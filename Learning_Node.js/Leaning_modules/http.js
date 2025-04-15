const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.write("Hello programmers.");
  else if (req.url === "/about") res.write("How are you?");
  else res.write("Page not found!");
  res.end();
});
console.log(server);

// server.on('connection',()=>{
//     console.log('New Connection...');
// })

server.listen(3500);
console.log("listening on port 3500");
