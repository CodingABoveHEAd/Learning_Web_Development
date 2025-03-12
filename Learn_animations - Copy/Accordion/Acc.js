const ps = document.getElementsByTagName('p');


function func(parent) {
    const ID = parent.id;
    let ind = ID[ID.length - 1] - '0';
    //ps[ind].display="block";console.log(ps[ind]);
    if (ps[ind].style.display === "block")
        ps[ind].style.display = "none";
    else
        ps[ind].style.display = "block";
}