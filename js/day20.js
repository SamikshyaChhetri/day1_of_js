//local storage

// localStorage.setItem("lastname", "Chhetri");
// localStorage.setItem("firstname", "Samikshya");
// document.getElementById("demo").innerHTML = localStorage.getItem("firstname");
document.getElementById("demo");
const tasks = [
  {
    id: "1",
    title: "task 1",
    description: "Description 1",
  },
  {
    id: "2",
    title: "task 2",
    description: "Description 2",
  },
  {
    id: "3",
    title: "task 3",
    description: "Description 3",
  },
];
localStorage.setItem("tasks", JSON.stringify(tasks));
const storedItem = localStorage.getItem("tasks", JSON.stringify(tasks));
const normalForm = JSON.parse(storedItem);
console.log(normalForm);
console.log(normalForm[0].id);
// console.log(StoredValue);
// console.log(JSON.stringify(tasks));
// let getstored = localStorage.getItem("tasks", tasks);
// console.log(getstored);
// JSON.parse(tasks);
// console.log(tasks[0]);
