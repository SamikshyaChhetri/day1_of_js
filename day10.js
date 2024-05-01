const elements = document.querySelectorAll(".container");

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target);
    const index = e.target.getAttribute("data-value");
    console.log(index);
  });
});
