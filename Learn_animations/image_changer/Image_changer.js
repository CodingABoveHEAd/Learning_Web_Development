let cur = 0;

function changer() {

    setInterval(function(){
        const images = document.getElementsByTagName("img");
    images[cur].style.display = "none";
    cur = (cur + 1) % images.length;
    //images[cur].style.transition="opacity 0.5 3s ease-in-out";
    images[cur].style.display = "block";
    },2500);


}