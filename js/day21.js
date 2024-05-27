document.getElementById("demo");
document.cookie = "name=Samikshya";
document.cookie = "surname=Chhetri";
const storedCookie = document.cookie;
console.log(storedCookie);
console.log(storedCookie.split(";"));
