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
  // vdoo.style.border = "1px solid black";
  bodyElement.style.backgroundImage = "url('./imagess/nehuu.JPG')";
  bodyElement.style.backgroundSize = "cover";
});
function animate() {
  const main = document.querySelector("h3");
  main.innerHTML = "";
  setTimeout(() => {
    main.innerHTML += "A";
  }, 200);
  setTimeout(() => {
    main.innerHTML += "w";
  }, 400);
  setTimeout(() => {
    main.innerHTML += "w";
  }, 600);
  setTimeout(() => {
    main.innerHTML += " ";
  }, 600);
  setTimeout(() => {
    main.innerHTML += "I";
  }, 800);
  setTimeout(() => {
    main.innerHTML += " ";
  }, 1000);
  setTimeout(() => {
    main.innerHTML += "L";
  }, 1200);
  setTimeout(() => {
    main.innerHTML += "O";
  }, 1400);
  setTimeout(() => {
    main.innerHTML += "V";
  }, 1600);
  setTimeout(() => {
    main.innerHTML += "E";
  }, 1600);
  setTimeout(() => {
    main.innerHTML += " ";
  }, 1800);
  setTimeout(() => {
    main.innerHTML += "Y";
  }, 2000);
  setTimeout(() => {
    main.innerHTML += "O";
  }, 2200);
  setTimeout(() => {
    main.innerHTML += "U";
  }, 2200);
  setTimeout(() => {
    main.innerHTML += " ";
  }, 2200);
  setTimeout(() => {
    main.innerHTML += "T";
  }, 2400);
  setTimeout(() => {
    main.innerHTML += "O";
  }, 2600);
  setTimeout(() => {
    main.innerHTML += "O";
  }, 2800);
  setTimeout(() => {
    main.innerHTML += "❤️‍🩹";
  }, 2900);

  setTimeout(() => {
    animate();
  }, 5000);
}

animate();
