let rand, cnt = 1;
const inp1 = document.getElementById('inp1');
const demo = document.getElementById("demo");
const demo2 = document.getElementById("demo2");
const inp = document.getElementById('inp');


function func1() {
    alert("Number generation successful");
    document.getElementById("msg1").style.display = "block";
    rand = Math.floor(Math.random() * 10) + 1;
}

function func(sc) {
    if (sc === 0) cnt = 1;
    localStorage.setItem(inp.value, Math.max(0, 10 - sc));
    inp.value="";
}


function func2() {
    const user_input = Number(inp1.value);
    if (user_input === rand) {
        demo.innerHTML = "Congratulations.Found the correct answer after " +
            cnt + " Attempts.Answer is " + user_input;
        func(cnt);
    }
    else {
        demo.innerHTML = "Wrong attempt";
        inp1.value = "";
        cnt++;
    }
}

// function func3() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let value = localStorage.getItem(key);
//         demo2.innerHTML = (i + 1)+ "." + key + " : " + value + "<br>";
//     }

// }

function func3() {
    demo2.innerHTML = ""; // Clear previous content

    if (localStorage.length === 0) {
        demo2.innerHTML = "No data in localStorage.";
        return;
    }

    let result = "";
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        result += (i + 1) + ". " + key + " : " + value + "<br>";
    }

    demo2.innerHTML = result; // Set the entire content once
}
