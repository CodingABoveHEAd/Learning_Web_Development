let mywindow;


function fheight() {
    document.getElementById("h").innerHTML = "Height= " + window.innerHeight;

}

function fwidth() {
    document.getElementById("w").innerHTML = "width= " + window.innerWidth;
}

function fopen() {
    mywindow=window.open('https://chatgpt.com/');
}
function fclose() {
    mywindow.close();
}

function goforward(){
    window.history.forward();
}

function gobackward(){
    window.history.back();
}