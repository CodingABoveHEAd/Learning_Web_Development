const multer = require("multer");
const path = require("path");
const createError = require("http-errors");


function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  const uploads_folder = `${__dirname}/../public/uploads/${subfolder_path}`;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploads_folder);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req,file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        console.log('error');
        cb(new Error(error_msg));
      }
    },
  });
  return upload;
}

module.exports = uploader;
