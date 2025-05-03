const express=require('express');
const {getInbox}=require('../controllers/inboxController');
const { decorateResponse } = require("../middlewares/common/decorateResponse");
const {checkLogin} = require("../middlewares/common/checkLogin");
const router=express.Router();

router.get('/',decorateResponse('inbox'),checkLogin,getInbox);

module.exports=router;