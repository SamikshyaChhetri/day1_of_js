document.addEventListener("mousemove", (e) => {
  const container = document.getElementById("container");
  container.style.left = e.clientX - 100 + "px";
  container.style.top = e.clientY - 100 + "px";
});
