const people = [
	{ name: "Liam", age: 25 },
	{ name: "Emma", age: 30 },
	{ name: "Noah", age: 42 },
	{ name: "Olivia", age: 18 },
	{ name: "William", age: 36 },
	{ name: "Ava", age: 27 },
	{ name: "James", age: 22 },
	{ name: "Isabella", age: 33 },
	{ name: "Oliver", age: 40 },
	{ name: "Sophia", age: 29 },
	{ name: "Benjamin", age: 38 },
	{ name: "Charlotte", age: 31 },
	{ name: "Elijah", age: 20 },
	{ name: "Mia", age: 24 },
	{ name: "Lucas", age: 45 },
	{ name: "Amelia", age: 35 },
	{ name: "Mason", age: 28 },
	{ name: "Harper", age: 39 },
	{ name: "Logan", age: 26 },
	{ name: "Evelyn", age: 21 },
];
const element=people.find((a)=>{
    return a.age==33;

});
console.log(element.name);
console.log(`${element.name} is ${element.age} years old`);


