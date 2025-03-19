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

const l3 = document.getElementById('l3');
const l33 = document.getElementById('l33');
const h3 = document.getElementById('h3');


function navbar1() {
    l3.style.display = 'none';
    l33.style.display = 'block';
    h3.style.display = 'flex';
    h3.style.animationName = 'h3p';
}

function navbar2() {
 h3.style.animationName='h3pp';
    setTimeout(function () {
        l33.style.display = 'none';
        l3.style.display = 'block';
        h3.style.display = 'none';
    }, 600);
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 700) {
        // Reset to desktop state
        l3.style.display = 'none';
        l33.style.display = 'none';
        h3.style.display = 'flex';
        // h3.style.animationName = ''; 
    } else {
        l3.style.display = 'block';
        l33.style.display = 'none';
        h3.style.display = 'none';
        // h3.style.animationName = '';
    }
});