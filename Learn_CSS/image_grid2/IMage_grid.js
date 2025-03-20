const cl=document.getElementsByClassName('im');
const dis=document.getElementById('dis');
 zoom=document.getElementById('zoom');

function func(element){
    let imgsrc=element.querySelector("img").src;
    dis.src=imgsrc;
    zoom.style.display="flex";
    zoom.style.animationName="zz";
    // console.log(imgsrc);
}

function fun2(){
    zoom.style.animationName="zz2";
    
    setTimeout(function(){
        zoom.style.display="none";
    },1000);
}
