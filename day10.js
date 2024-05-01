// const elements = document.querySelectorAll(".items");

// elements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     console.log(e.target);
//     const index = e.target.getAttribute("data-value");
//     console.log(index);
//   });
// });

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
  const result = eval(input_str);
  displa.innerHTML = input_str + "=" + result;
}
