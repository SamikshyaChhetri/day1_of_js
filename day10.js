let input_str = "";
const displa = document.getElementById("display");
const element = document.querySelectorAll(".itm");
element.forEach((item) => {
  item.addEventListener("click", (e) => {
    input_str += e.target.getAttribute("data-value");
    displa.value = input_str;
  });
});

const res = document.querySelector(".eql");
res.addEventListener("click", calculate);
function calculate() {
  try {
    const result = eval(input_str);
    displa.value = result;
    input_str = result;
  } catch (error) {
    displa.value = "Syntax Error!";
    displa.style.color = "red";
    displa.style.fontSize = "20px";
    input_str = "";
  }
}
const ac = document.querySelector(".Aclear");
ac.addEventListener("click", aclear);
function aclear() {
  input_str = "";
  displa.value = input_str;
  displa.placeholder = "0";
}
const c = document.querySelector(".clear");
c.addEventListener("click", () => {
  input_str = input_str.slice(0, -1);
  displa.value = input_str;
});
const onn = document.querySelector(".on");
onn.addEventListener("click", () => {
  if (onn.innerHTML == "ON") {
    onn.innerHTML = "OFF";
  } else {
    onn.innerHTML = "ON";
    displa.placeholder = "Press ON to start";
  }
});
