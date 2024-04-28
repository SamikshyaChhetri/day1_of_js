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
ele.addEventListener("click", (e) => {
  wrapp.style.display = "none";
  vdoo.style.display = "block";
});
