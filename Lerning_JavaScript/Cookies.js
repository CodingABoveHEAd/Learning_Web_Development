function setCookie() {
    cname = prompt("Please enter your username:", "");
    cvalue = prompt("Please enter your name:", "");
    exday = 2;
    if (cname && cvalue) { }
    else {
        alert("User have to enter name and details");
        return;
    }
    const d = new Date();
    d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// document.cookie="username=Nlloy";
// document.cookie="name=Nlshan";

function getcookie() {
    //console.log(document.cookie);
    cname = prompt("Please enter your username you want to get:","");
    let ca = document.cookie.split(';'), s;
    console.log(ca);
    //  console.log(ca[1]);
    for (let i = 0; i < ca.length; i++) {
        s = ca[i];
        // console.log(s[3]);
        for (let j = 0; j < s.length; j++) {
            let nm = "";
            if (s[j] === '=') {
                for (let k = 0; k < j; k++) {
                    if (s[k] != " ") nm += s[k];
                    // console.log(nm);
                }
                if (nm === cname) {
                    let res = "";
                    for (let m = j + 1; m < s.length; m++) {
                        res += s[m];
                    }
                    console.log(res);
                    return res;
                }
            }
        }
    }

}


function removecookie() {
    cname = prompt("Username:", "");
    cvalue = prompt("Nickname:", "");
    const d = new Date();
    d.setTime(d.getTime() + (.24 * .60 * .1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function checkcookie() {
    cname = prompt("Please enter your username you want to check:", "");
    if (cname) alert("Welcome " + cname);
    else setCookie();
}


