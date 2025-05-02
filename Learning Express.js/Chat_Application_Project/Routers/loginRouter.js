const express=require('express');
const {getLogin,login}=require('../controllers/loginController');
const {decorateResponse}=require('../middlewares/common/decorateResponse');

const router=express.Router();

router.get('/',decorateResponse('Login'),getLogin);

router.post('/',login);

module.exports=router;