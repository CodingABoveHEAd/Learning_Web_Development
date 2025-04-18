const { sampleHandle } = require("./helpers/Handler/sampleHandler");
const {userHandle}=require('./helpers/Handler/userHandle');
const {tokenHandle}=require('./helpers/Handler/tokenHandler');

const routes = {
  sample: sampleHandle,
  user: userHandle,
  token:tokenHandle
};

module.exports = routes;
