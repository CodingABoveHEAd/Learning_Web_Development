const right = document.getElementById('right');
const down=document.getElementById('down');

function funcr() {

    right.style.visibility = 'visible';
    right.style.animationName='rnav';
        
}

function funcback(){
    right.style.animationName='nav2';
    setTimeout(function(){
        right.style.visibility = 'hidden';
    },480);  
} 


function funcd() {

    down.style.visibility = 'visible';
    down.style.animationName='dnav';
        
}

function funcdown(){
    down.style.animationName='nav3';
    setTimeout(function(){
        down.style.visibility = 'hidden';
    },480);  
} 
