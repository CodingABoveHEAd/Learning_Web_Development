const EventEmmiter=require('events');
// console.log(EventEmmiter);

const emitter1=new EventEmmiter();

//register a listener for bellring event
emitter1.on('bellRing',()=>{
    console.log('We need to run!');
});

emitter1.on('bellRing2',({period,text})=>{
    console.log(`We need to run2 because ${period} ${text}!`);
});

//raise an event
setTimeout(() => {
    emitter1.emit('bellRing');
    emitter1.emit('bellRing2',{
        period:'first',
        text :'period ended'
    });
},2000);


