
function AJAX_Parse() {
    const demo1 = document.getElementById("demo1");
    const xmlreq = new XMLHttpRequest();
    xmlreq.onload = function () {
        //console.log(xmlreq.responseText);
        //xmlreq.responseText is the json text
        Parse(xmlreq.responseText,demo1);
    };
    xmlreq.open("GET", "Data.txt");
    xmlreq.send();
}

async function Fetch_Parse() {
    const demo2 = document.getElementById("demo2");
    const myobj = await fetch('http://127.0.0.1:5500/Learn_Json/Data.txt');
    const resp = await myobj.text();
    //demo2.innerHTML = resp;
    Parse(resp,demo2);
}

function Parse(mytext,demo) {
    const myobj = JSON.parse(mytext);
    console.log(myobj);
    demo.innerHTML = myobj.details;
}