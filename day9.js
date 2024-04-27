const element = document.getElementById("no");
element.addEventListener("mouseover", (e) => {
  const randomx = Math.floor(Math.random() * (window.innerWidth - 50));
  const randomy = Math.floor(Math.random() * (window.innerHeight - 50));
  element.style.left = randomx + "px";
  element.style.top = randomy + "px";
});
