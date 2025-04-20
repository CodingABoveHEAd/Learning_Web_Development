// title :Uptime monitoring application
// Description:A restful api to monitor up or down time of user defined links
// Author:Niloy Chowdhury
// Date;15/4/2025

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/Environments");
const data = require("./lib/data");

//app object - module scaffolding
const app = {};

// data.create('test','newFile',{'name':'Bangladesh','language' : 'Bangla'},(err)=>{
//   console.log('error was',err);
// });

// data.read("test", "newFile", (err, data) => {
//   console.log("error is", err);
//   console.log("data is", data);
// });

// data.update('test','newFile',{'name':'India','language' : 'Hindi'},(err)=>{
//   console.log(err);
// });

// data.delete('test','newFile',(err)=>{
//   console.log(err);
// });

//configuration
// app.config = {
//   port: 3500,
// };

//create server
app.createServer = () => {
  const server = http.createServer(app.ReqRes);
  server.listen(environment.port, () => {
    // console.log(`Environment variable is ${process.env.NODE_ENV}`);
    console.log(`Listening to port number ${environment.port}`);
  });
};

//handle request response
app.ReqRes = handleReqRes;

//start the server
app.createServer();
// console.log(app);
