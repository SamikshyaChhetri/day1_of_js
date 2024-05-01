// const elements = document.querySelectorAll(".items");

// elements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     console.log(e.target);
//     const index = e.target.getAttribute("data-value");
//     console.log(index);
//   });
// });
const change = document.getElementById("wrap");
const originalBackgroundImage = change.style.backgroundImage;
change.addEventListener("mouseover", () => {
  change.style.backgroundImage =
    "linear-gradient(lightgreen, white, lightgreen)";
});
change.addEventListener("mouseout", () => {
  change.style.backgroundImage = originalBackgroundImage;
});

let input_str = "";
const displa = document.getElementById("display");
const element = document.querySelectorAll(".itm");
element.forEach((item) => {
  item.addEventListener("click", (e) => {
    input_str += e.target.getAttribute("data-value");
    displa.innerHTML = input_str;
  });
});

const res = document.querySelector(".eql");
res.addEventListener("click", calculate);
function calculate() {
  try {
    const result = eval(input_str);
    displa.innerHTML = result;
  } catch (error) {
    displa.innerHTML = "syntax error";
  }
}
const ac = document.querySelector(".Aclear");
ac.addEventListener("click", aclear);
function aclear() {
  input_str = "";
  displa.innerHTML = input_str;
}
const c = document.querySelector(".clear");
c.addEventListener("click", () => {
  input_str = input_str.slice(0, -1);
  displa.innerHTML = input_str;
});
