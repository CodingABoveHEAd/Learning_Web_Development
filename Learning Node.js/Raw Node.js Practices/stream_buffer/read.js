const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>form</title></head>");
    res.write(
      '<body><form method="post" action="/process"><input name="message" /></form></body>'
    );
  } else if (req.url === "/process" && req.method === "POST") {
    const Data = [];

    req.on("data", (chunk) => {
      Data.push(chunk);
    });

    req.on("end", () => {
      console.log("stream finished");
      const parsedData = Buffer.concat(Data).toString();
      console.log(parsedData);

      res.write("Thank you for submitting");
      res.end(); // end the response *after* writing
    });
  } else res.write("Page not found!");
});

server.listen(3500);
console.log("listening on port 3500");