function loaddata(callback){
    //create new request
        const xhr=new XMLHttpRequest();
        //what to do when response arrives
        xhr.onload=function(){
            callback(this);
        };
    
        // GET=GET DATA FROM SERVER(most used)
        //POST=KEEP DATA IN THE SERVER
        //PUT=UPDATE DATA
        //PATCH
        //DELETE=DELETE DATA FROM SERVER
        xhr.open("GET","Data.txt");
        xhr.send();
    
    }

    function func1(xhr){
        const cont=document.getElementById("demo1");
         cont.innerHTML=xhr.responseText;

    }

    function func2(xhr){
        const cont=document.getElementById("demo2");
        cont.innerHTML=xhr.responseText;

    }