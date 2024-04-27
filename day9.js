const element = document.getElementById("no");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * 500);
  const randomy = Math.floor(Math.random() * 300);
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
});
