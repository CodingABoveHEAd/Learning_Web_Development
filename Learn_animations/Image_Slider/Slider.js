// const slidey = document.getElementsByClassName('slide');

// var cnty=0;

// // console.log(slides[0]);
// for(let i=0;i<slidey.length;i++){
//     slidey[i].style.bottom=`${i*100}%`;
// }


// function slideimagey(){
//     for(let i=0;i<slidey.length;i++){
//         slidey[i].style.transform=`translateY(${cnty * 100}%)`;
//     }
    
// }

// function previousy(){
//     cnty--;
//     if(cnty===-1)cnty=slidey.length-1;
//     slideimagey();
// }

// function nexty(){
//     cnty++;
//     cnty%=slidey.length;
//     slideimagey();
// }




const slidex = document.getElementsByClassName('slide');

let cntx=0,interx;

// console.log(slides[0]);
for(let i=0;i<slidex.length;i++){
    slidex[i].style.left=`${i*100}%`;
}


function slideimagex(){
    for(let i=0;i<slidex.length;i++){
        slidex[i].style.transform=`translateX(-${cntx * 100}%)`;
    }
    
}

function previousx(){
    cntx--;
    if(cntx===-1)cntx=slidex.length-1;
    slideimagex();
}

function nextx(){
    cntx++;
    cntx%=slidex.length;
    
    slideimagex();
}

function goauto(){
     interx=setInterval(nextx,1000);
}

function stopauto(){
    clearInterval(interx);
    console.log("Interval stopped!");
}