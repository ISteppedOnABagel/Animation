const image = document.getElementById("myImage");
const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
const demo3 = document.getElementById("demo3");


function animateFade(text) {
  image.classList.remove("animate");
  setTimeout(() => {
    image.src = "Barry-" + text + (text == "Happy" ? ".png" : ".webp");
    image.classList.add("animate");
  }, 100);
}
