function func1(){
    let inp1=document.getElementsByClassName('inp1');
    console.log(inp1);
    inp1[0].style.display="block";
    inp1[1].style.display="block";
    inp1[2].style.display="block";
    
}

function func2(){
    let inp1=document.getElementsByClassName('inp1');
    sessionStorage.setItem(inp1[0].value,inp1[1].value);
    console.log(sessionStorage.getItem(inp1[0].value));

    inp1[0].style.display="none";
    inp1[1].style.display="none";
    inp1[2].style.display="none";

    alert("Submission successful");

}

function func3(){

    let inp2=document.getElementsByClassName('inp2');
    // console.log(inp2);
    inp2[0].style.display="block";
    inp2[1].style.display="block";

}

function func4(){
    const demo=document.getElementById('demo');
    let inp2=document.getElementsByClassName('inp2');
    demo.innerHTML=sessionStorage.getItem(inp2[0].value);
    inp2[0].style.display="none";
    inp2[1].style.display="none";

}

function func5(){

    let inp3=document.getElementsByClassName('inp3');
    // console.log(inp2);
    inp3[0].style.display="block";
    inp3[1].style.display="block";

}

function func6(){
    const demo=document.getElementById('demo');
    let inp3=document.getElementsByClassName('inp3');
    alert("User named "+sessionStorage.getItem(inp3[0].value) +" has been removed");
    sessionStorage.removeItem(inp3[0].value);
    inp3[0].style.display="none";
    inp3[1].style.display="none";

}

function func7(){
    sessionStorage.clear();
    alert("Memory Cleared");

}

function func8(){
    const demo=document.getElementById('demo');
    for(let i=0;i<sessionStorage.length;i++){
        var x=sessionStorage.key(i);
        demo.innerText+=x;
    }
}