const demo=document.getElementById('demo');

function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);

    }
    else{
        demo.innerHTML="Geolocation doesn't support to this browser."
    }

    addEventListene()

}

function showposition(position){
    demo.innerHTML="Latitude: " + position.coords.latitude +
    "<br>Longitude: "+position.coords.longitude;
}