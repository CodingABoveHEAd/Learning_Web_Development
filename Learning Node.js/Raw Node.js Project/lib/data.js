//dependency

const fs = require("fs");
const path = require("path");

const lib = {};
//base directory of the data folder
lib.basedir = path.join(__dirname, "../.data/");

//write data to file
lib.create = (dir, file, data, callback) => {
  //open file
  fs.open(
    lib.basedir + dir + "/" + file + ".json","wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringData, (err1) => {
          !err1
            ? fs.close(fileDescriptor, (err2) => {
                if (!err2) {
                  callback(false);
                } else {
                  callback("Closing the new file");
                }
              })
            : callback("error writing to new file!");
        });
      } else {
        callback('Filename Already exists');
      }
    }
  );
};



module.exports=lib;