const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const readFile = fs.createReadStream(`${__dirname}/bigdata.txt`);
  readFile.pipe(res);
});


server.listen(3000);
console.log("running on port 3000");
