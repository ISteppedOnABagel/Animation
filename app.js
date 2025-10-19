const button = document.getElementById("button");
const element = document.getElementById("myImage");

button.onclick = fade;

function fade() {
  element.classList.toggle("animate");
}
