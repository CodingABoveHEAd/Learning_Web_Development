const handler={};
handler.notFoundhandle=(requestProperties,callBack)=>{
    callBack(404,{
        message : 'Request url not found',
    });
    console.log('Not Found');
}

module.exports=handler;