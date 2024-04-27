const element = document.getElementById("container");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * 500);
  const randomy = Math.floor(Math.random() * 300);
  element.style.right = randomx + "px";
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
  element.style.bottom = randomy + "px";
  element.style.position = "absolute";
});
// console.log(window.innerWidth);
// console.log(window.innerHeight);
