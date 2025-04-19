// title :handle request resopnese
// Description:Handle request and response
// Author:Niloy Chowdhury
// Date;16/4/2025

//Dependency 
const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes=require('../routes');
const {notFoundhandle}=require('./Handler/notFoundHandler');
const {parseJson}=require('./utilities'); 


// module scaffolding
const handler={};


handler.handleReqRes = (req, res) => {
  //request handeling
  // console.log(req);
    
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);

  // console.log(parsedUrl);
  const path = parsedUrl.pathname;
  const trimmedpath = path.replace(/^\/+|\/+$/g,"");
  // console.log(trimmedpath);
  const method = req.method.toLowerCase(); //get post put

  const queryStringObject = parsedUrl.query;
  // console.log(queryStringObject);
  const headersObject = req.headers;
    // console.log(headersObject);

    const requestProperties={
        parsedUrl,
        path,
        trimmedpath,
        method,
        queryStringObject,
        headersObject,
    };

  const decoder = new StringDecoder("utf-8");
  let realData = "";


  const chosenHandler=routes[trimmedpath]?routes[trimmedpath]:notFoundhandle;
  
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    requestProperties.body = parseJson(realData); //parse the json string to object

    chosenHandler(requestProperties,(statusCode,payload)=>{
      statusCode=typeof(statusCode)==='number'?statusCode :500;
      payload=typeof(payload)==='object'?payload : {};
  
      const payloadString=JSON.stringify(payload);
      res.setHeader('content-type','application/json');
      res.writeHead(statusCode);
      res.end(payloadString);
  })

  });
};

module.exports=handler;