//dependency

const fs = require("fs");
const path = require("path");

const lib = {};
//base directory of the data folder
lib.basedir = path.join(__dirname, "../.data/");

//write data to file(steps-->open-write-close)
lib.create = (dir, file, data, callback) => {
  //open file
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringData, (err1) => {
          !err1
            ? fs.close(fileDescriptor, (err2) => {
                !err2 ? callback(false) : callback("Closing the new file");
              })
            : callback("error writing to new file!");
        });
      } else {
        callback("Filename Already exists");
      }
    }
  );
};

lib.read = (dir, file, callback) => {
  fs.readFile(
    lib.basedir + dir + "/" + file + ".json",
    "utf-8",
    (err, data) => {
      callback(err, data);
    }
  );
};

//write data to file(steps-->open-truncate-write-close)
lib.update = (dir, file, data, callback) => {
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "r+",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //truncate the file
        fs.ftruncate(fileDescriptor, (err1) => {
          if (!err1) {
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDescriptor, stringData, (err2) => {
              if (!err2) {
                fs.close(fileDescriptor, (err3) => {
                  err3
                    ? callback("Error occured while closing!")
                    : callback("File update successful!");
                });
              } else callback("Error occured while writting!");
            });
          } else callback("Error truncating file!");
        });
      } else {
        callback("File may not exist to update!");
      }
    }
  );
};

lib.delete = (dir, file, callback) => {
  fs.unlink(lib.basedir + dir + "/" + file + ".json", (err) => {
    err ? callback("File doesn't exist") : callback("File Deleted successfully");
  });
};

module.exports = lib;
