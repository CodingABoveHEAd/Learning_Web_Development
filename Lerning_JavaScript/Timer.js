const x=document.getElementById('timer');
const y=document.getElementById('interval');
let st,si;


function start_timer(){

    st=setTimeout(function(){
        x.innerHTML=Date();
    },3000);

}

function end_timer(){
clearTimeout(st);
}

function start_interval(){

si=setInterval(function(){
    y.innerHTML=new Date();
},1000);

}

function end_interval(){

    clearInterval(si);

}