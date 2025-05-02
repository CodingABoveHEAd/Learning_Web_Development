const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpg", "image/jpeg", "image/png"],
    1000000,
    "Only .jpg .jpeg or png allowed"
  );
  upload.any()(req, res, (err) => {
    if (!err) {
      next();
    } else {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    }
  });
}

module.exports = avatarUpload;
