const fs=require('fs');

const readStream=fs.createReadStream(`${__dirname}/bigdata.txt`);
const writeStream=fs.createWriteStream(`${__dirname}/output.txt`);

// readStream.on('data',(chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);