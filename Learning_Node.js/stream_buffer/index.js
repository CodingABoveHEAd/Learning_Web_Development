const fs=require('fs');
const ourRead=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');

ourRead.on('data',(chunk)=>{
    console.log(chunk);
});