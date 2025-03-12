const Confirm = document.getElementById("confirm");
const Prompt = document.getElementById("prompt");

function wAlert() {
    alert("I am alerting you");
}

function wConfirm() {
    if (confirm("want to confirm?")) {
        Confirm.innerHTML = "User conform";
    }
    else {
        Confirm.innerHTML = "User didn't conform";
    }
}

function wPrompt() {
    const text = prompt("Enter your name", "");
    if (text) {
        Prompt.innerHTML = text;
    }
    else {
        Prompt.innerHTML = "User did't enter his/her name!"
    }
}