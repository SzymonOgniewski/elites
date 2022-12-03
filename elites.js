const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".channel");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.setAttribute("disabled", "");
    button.style.backgroundColor = "red";
    button.style.textDecoration = "line-through";
  });
});
