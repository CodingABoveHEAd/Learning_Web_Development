const display=document.getElementById("demo");

function getdata1(){

    fetch("http://127.0.0.1:5500/fetch_folder/niloy.txt")
    .then(res => res.text())
    .then(data =>{
        display.innerText=data;
    });
}

async function getdata2(){

    const res=await fetch("http://127.0.0.1:5500/fetch_folder/niloy.txt");
    const data=await res.json();
    display.innerText=data;
}