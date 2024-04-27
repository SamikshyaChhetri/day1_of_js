const element = document.getElementById("no");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * 1500);
  const randomy = Math.floor(Math.random() * 900);
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
});
