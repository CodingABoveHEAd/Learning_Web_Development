// function checkvalidation1() {
//     let x = document.getElementById("demo");
//     const btn1 = document.getElementById("btn");
//     if (!btn1.checkValidity()) {
//         x.innerHTML = btn1.validationMessage;
//     }
//     else
//         x.innerHTML = "Input is valid";

// }


function checkvalidation2() {
    let x = document.getElementById("demo");
    const btn1 = document.getElementById("btn");

    if (btn1.validity.valueMissing) {
        btn1.setCustomValidity("Field is missing");
    }

    else if (btn1.validity.rangeOverflow) {
        btn1.setCustomValidity("Range overflow");
    }
    else if (btn1.validity.rangeUnderflow) {
        btn1.setCustomValidity("Range underflow");
    }
    else {
        btn1.setCustomValidity("Valid number");
    }

    if (!btn1.checkValidity()) {
        x.innerHTML = btn1.validationMessage;
    }
}
