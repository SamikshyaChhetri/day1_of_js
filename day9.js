const element = document.getElementById("no");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * (window.innerWidth - 50));
  const randomy = Math.floor(Math.random() * (window.innerHeight - 50));
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
});
const wrapp = document.getElementById("wrap");
const vdoo = document.getElementById("vdo");
const ele = document.getElementById("yes");
const bodyElement = document.body;
ele.addEventListener("click", (e) => {
  wrapp.style.display = "none";
  vdoo.style.display = "block";
  bodyElement.style.backgroundImage = "url('./imagess/nehuu.JPG')";
  bodyElement.style.backgroundSize = "cover";
});
const string = "Aww! LOVE YOU MORE  ";
const newele = document.getElementById("text");
const splitted_str = string.split("");
let index = 0;
const animate = () => {
  newele.innerHTML += splitted_str[index];
  setTimeout(() => {
    index += 1;
    if (index == splitted_str.length) {
      newele.innerHTML = "";
      index = 0;
    }
    animate();
  }, 250);
};
animate();
