const element = document.getElementById("no");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * window.innerWidth);
  const randomy = Math.floor(Math.random() * window.innerHeight);
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
});
