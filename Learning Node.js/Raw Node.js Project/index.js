// title :Uptime monitoring application
// Description:A restful api to monitor up or down time of user defined links
// Author:Niloy Chowdhury
// Date;15/4/2025


const server = require("./lib/server");
const worker = require("./lib/worker");

//app object - module scaffolding
const app = {};

// sendTwilioSms("Hello from Node JS", "01627242435", (err, data) => {
//   if(!err && data){
//       console.log("Message sent successfully", data);
//   }else{
//       console.log("There was an error while sending the message", err);
//   }
// }  );

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


app.init=()=>{
  //start the server
  server.init();
  //start the worker
  worker.init();
}

app.init();
module.exports = app;

// console.log(app);
