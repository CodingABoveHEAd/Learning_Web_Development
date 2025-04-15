// const EventEmmiter=require('events');
// console.log(EventEmmiter);

// const emitter1=new EventEmmiter();

const start=require('./school');

const emitter1=start.emitter1;

//register a listener for bellring event
emitter1.on('bellRing',()=>{
    console.log('We need to run!');
});

emitter1.on('bellRing2',({period,text})=>{
    console.log(`We need to run because ${period} ${text}!`);
});

start.startPeriod();



