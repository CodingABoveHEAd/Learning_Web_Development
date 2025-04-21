// title :Uptime monitoring serverlication
// Description:A restful api to monitor up or down time of user defined links
// Author:Niloy Chowdhury
// Date;15/4/2025

const http = require("http");
const handleReqRes = require("../helpers/handleReqRes");
const environment = require("../helpers/Environments");


//server object - module scaffolding
const server = {};

//create server
server.createServer = () => {
  const Server = http.createServer(server.ReqRes);
  Server.listen(environment.port, () => {
    // console.log(`Environment variable is ${process.env.NODE_ENV}`);
    console.log(`Listening to port number ${environment.port}`);
  });
};

//handle request response
server.ReqRes = handleReqRes;

//start the server
server.init = () => {
  server.createServer();
  // console.log(server);
};

module.exports = server;
