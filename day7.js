const a = document.getElementById("child");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    let b = parseInt(a.style.left);
    if (b < window.innerWidth - 300) {
      a.style.left = b + 1 + "px";
    }
  } else if (e.key === "ArrowLeft") {
    let b = parseInt(a.style.left);
    if (b != "1") {
      a.style.left = b - 1 + "px";
    } else {
      alert("boundary reached");
    }
  } else if (e.key === "ArrowUp") {
    let b = parseInt(a.style.top);
    if (b != "1") {
      a.style.top = b - 1 + "px";
    } else {
      alert("Boundary reached");
    }
  } else if (e.key === "ArrowDown") {
    let b = parseInt(a.style.top);
    if (b < window.innerHeight - 150) {
      a.style.top = b + 1 + "px";
    } else {
      alert("Invalid key");
    }
  }
});
