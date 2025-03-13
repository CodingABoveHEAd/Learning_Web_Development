let gpar = document.getElementById('top');
let parent = document.getElementById('parent');
let inp = document.getElementById('inp');
let ppp = document.getElementsByClassName('pp');
let divc = document.getElementsByClassName('divp');


function add() {

    if (inp.value === "") {
        alert('Please enter a task');
        return;
    }

    const newdiv = document.createElement('div');
    newdiv.className = "divp";

    const newp = document.createElement('p');
    newp.className = 'pp';
    newp.textContent = inp.value;

    const imag = document.createElement('img');
    imag.src = "Close-256.png";
    imag.alt = "remove";
    imag.className = "im";
    imag.onclick = Remove;

    newdiv.appendChild(newp);
    newdiv.appendChild(imag);
    parent.appendChild(newdiv);
    inp.value = "";
    console.log(divc[0].innerHTML);
    alert('task addedd successfully');

}


function funcadd(b){
    b.style.display='none';
    const inp=document.getElementById('inp');
    const btn=document.getElementById('btn');
    inp.style.display='block';
    btn.style.display='block';

}


function Remove(event) {
    event.target.parentElement.remove();
    alert('removed Successsfully');
}
