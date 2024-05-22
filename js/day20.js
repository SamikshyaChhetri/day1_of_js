// localStorage.setItem("lastname", "Chhetri");
// localStorage.setItem("firstname", "Samikshya");
// document.getElementById("demo").innerHTML = localStorage.getItem("firstname");
document.getElementById("demo");
const tasks = JSON.stringify([
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
]);
localStorage.setItem("tasks", tasks);
// console.log(JSON.stringify(tasks));
// console.log(tasks);
localStorage.getItem("tasks", tasks);
