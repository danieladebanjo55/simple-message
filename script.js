const formEl = document.querySelector("form");
const inputValue = document.querySelector("input");
const outputValue = document.getElementById("my-message");

function output() {
  outputValue.innerHTML = inputValue.value;
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  output();
  inputValue.value = "";
});
