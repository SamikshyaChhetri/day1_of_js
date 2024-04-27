const randomNames = [
    "Liam",
    "Emma",
    "Noah",
    "Olivia",
    "William",
    "Ava",
    "James",
    "Isabella",
    "Oliver",
    "Sophia",
    "Benjamin",
    "Charlotte",
    "Elijah",
    "Mia",
    "Lucas",
    "Amelia",
    "Mason",
    "Harper",
    "Logan",
    "Evelyn"
];
// const element=randomNames.indexOf("Ava");
// document.getElementById("hehe").innerHTML=element;
// document.getElementById("hehe1").innerHTML=randomNames[element];
let element=randomNames.slice(2,4);
console.log(element);
randomNames.splice(2,4);
console.log(randomNames);