function loaddata(){
//create new request
    const xhr=new XMLHttpRequest();
    //what to do when response arrives
    xhr.onload=function(){
        const cont=document.getElementById("demo");
        cont.innerHTML=xhr.responseText;
        
    };

    // GET=GET DATA FROM SERVER(most used)
    //POST=KEEP DATA IN THE SERVER
    //PUT=UPDATE DATA
    //PATCH
    //DELETE=DELETE DATA FROM SERVER

    xhr.open("GET","Data.txt");
    xhr.send();

}