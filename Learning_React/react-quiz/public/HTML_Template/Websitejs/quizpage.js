// const options = document.getElementsByClassName("opt");
const prog = document.querySelector("progress"); // Selects the first progress bar

// eslint-disable-next-line no-unused-vars
function func1(event) {
  let parent = event.target.parentElement;
  if (event.target.checked) parent.style.backgroundColor = "lightblue";
  else parent.style.backgroundColor = "rgb(241, 241, 241)";
}

// eslint-disable-next-line no-unused-vars
function func2() {
  prog.value = Number(prog.value) - 25;
}

// eslint-disable-next-line no-unused-vars
function func3() {
  prog.value = Number(prog.value) + 25;
}
