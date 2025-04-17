const { sampleHandle } = require("./helpers/Handler/sampleHandler");
const {userHandle}=require('./helpers/Handler/userHandle');

const routes = {
  sample: sampleHandle,
  user: userHandle,
};

module.exports = routes;
