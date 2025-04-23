const handler=(req,res)=>{
    // console.log(req.app.get);
    const data=req.accepts('raw');
    console.log(data);
    res.send('Hello World');
}

module.exports=handler;