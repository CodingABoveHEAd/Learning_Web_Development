const side = document.getElementById('side');
const rig = document.getElementById('right');
const ss=document.getElementsByClassName('ss');

function func1(right) {
    for(let i=0;i<ss.length;i++){
        ss[i].style.display="block";
    }
    right.style.display = "none";
    side.style.display = "flex";
    side.style.animationName = "sd";
}

function func2() {
    
    side.style.animationName = "sd2";
    for(let i=0;i<ss.length;i++){
        ss[i].style.display="none";
    }
    setTimeout(function () {
        side.style.display = "none";
        rig.style.display = "block";
    }, 900);

}


const slidex = document.getElementsByClassName('dis');

let cntx=0,interx;



for(let i=0;i<slidex.length;i++){
    slidex[i].style.left=`${i*100}%`;
}


function slideimagex(){
    for(let i=0;i<slidex.length;i++){
        slidex[i].style.transform=`translateX(-${cntx * 100}%)`;
    }
    
}

function nextx(){
    cntx++;
    cntx%=slidex.length;
    slideimagex();
}

function goauto(){
     interx=setInterval(nextx,2000);
}

