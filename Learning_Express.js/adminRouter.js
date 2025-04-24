const express = require('express');

const adminRouter= express.Router();

adminRouter.get('/',(req,res)=>{
    res.send("this homepage of admin router");
});

adminRouter.get('/about',(req,res)=>{
    res.send("this aboutpage of admin router");
});

module.exports=adminRouter;