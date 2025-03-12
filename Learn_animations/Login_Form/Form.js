const formp=document.getElementById('formp');
// const btn1=document.getElementById('btn1');
// const btn2=document.getElementById('btn2');
// const btn3=document.getElementById('btn3');
const inp=document.getElementsByTagName("input");


function func1(){
    formp.style.display="block";
}

function func2(){
    formp.style.display="none";
}


function func3(){
    for(let i=0;i<inp.length-1;i++){
        if(!inp[i].value){
            alert('All field are required');
            return;
        }
        console.log(inp[i].value);
    }
}

function gfunc(btn){
    // btn.style.opacity="1";
    btn.style.filter = "brightness(1.5)";

}

function gfunc2(btn){
    // btn.style.opacity=".8";
    btn.style.filter = "brightness(1)";

}