const handler={};
handler.notFoundhandle=(requestProperties,callBack)=>{
    callBack(404,{
        message : 'Reques url not found',
    });
    console.log('Not Found');
}

module.exports=handler;