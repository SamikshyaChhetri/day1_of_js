const employees = [
    { name: 'John', salary: 50000 },
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 55000 },
    { name: 'Emily', salary: 52000 },
    { name: 'Michael', salary: 58000 },
    { name: 'Sophia', salary: 54000 },
    { name: 'William', salary: 56000 },
    { name: 'Emma', salary: 59000 },
    { name: 'James', salary: 57000 },
    { name: 'Olivia', salary: 61000 }
 ];
 let elements = document.getElementById("container");
 employees.forEach((a) => {
     elements.innerHTML += `<div class="hehe">${a.name} earns ${a.salary}<br></div>`;
 });
 