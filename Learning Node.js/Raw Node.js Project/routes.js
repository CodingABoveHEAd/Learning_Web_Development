const { sampleHandle } = require("./helpers/Handler/sampleHandler");
const { userHandle } = require("./helpers/Handler/userHandle");
const { tokenHandle } = require("./helpers/Handler/tokenHandler");
const { checkHandle } = require("./helpers/Handler/checkHandle");

const routes = {
  sample: sampleHandle,
  user: userHandle,
  token: tokenHandle,
  check: checkHandle,
};

module.exports = routes;
