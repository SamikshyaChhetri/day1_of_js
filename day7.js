console.log(window.innerHeight);
const a = document.getElementById("child");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    let b = parseInt(a.style.left);
    if (b <= 1420 - 175) {
      a.style.left = b + 10 + "px";
    } else {
      alert("Boundary reached");
    }
  } else if (e.key === "ArrowLeft") {
    let b = parseInt(a.style.left);
    if (b > "1") {
      a.style.left = b - 10 + "px";
    } else {
      alert("Boundary reached");
    }
  } else if (e.key === "ArrowUp") {
    let b = parseInt(a.style.top);
    if (b > "1") {
      a.style.top = b - 10 + "px";
    } else {
      alert("Boundary reached");
    }
  } else if (e.key === "ArrowDown") {
    let b = parseInt(a.style.top);
    if (b <= 680 - 100) {
      a.style.top = b + 10 + "px";
    } else {
      alert("Boundary reached");
    }
  } else {
    alert("Invalid key");
  }
});
