// console.log("hello world");
const _ = require('lodash');
const obj=require('./index');
// console.log(obj.err(6));
// console.log(_.last(obj.arr));

// const path=require('path');
// const myPath='E:/Web_Development(All in one)/Learning_Web_Development/Learning_Node.js/app.js';
// console.log(path.parse(myPath));

// const OS=require('os');
// console.log(OS.cpus());

const fs=require('fs');
fs.writeFileSync('myfile.txt','hello world.');
fs.appendFileSync('myfile.txt','How are you?');
fs.unlinkSync('myfile2.txt',(err,data)=>{
    
});


//sync way
// const data=fs.readFileSync('myfile.txt');
// console.log(data.toString());

const data2=fs.readFile('myfile.txt',(err,data)=>{
    console.log(data.toString()+'1');
});


console.log('hello');









// console.log(_.last([1,2,3,4]));
// console.log(global);

// var a=5;
// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//     console.log('displaying after every 2s');
// }, 2000);


