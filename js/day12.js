// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 5000);

// console.log("Third");

const func = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
};

func();

const funcn = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
};

funcn();
