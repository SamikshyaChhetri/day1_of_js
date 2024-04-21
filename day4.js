// const people = [
// 	{ name: "Liam", age: 25 },
// 	{ name: "Emma", age: 30 },
// 	{ name: "Noah", age: 42 },
// 	{ name: "Olivia", age: 18 },
// 	{ name: "William", age: 36 },
// 	{ name: "Ava", age: 27 },
// 	{ name: "James", age: 22 },
// 	{ name: "Isabella", age: 33 },
// 	{ name: "Oliver", age: 40 },
// 	{ name: "Sophia", age: 29 },
// 	{ name: "Benjamin", age: 38 },
// 	{ name: "Charlotte", age: 31 },
// 	{ name: "Elijah", age: 20 },
// 	{ name: "Mia", age: 24 },
// 	{ name: "Lucas", age: 45 },
// 	{ name: "Amelia", age: 35 },
// 	{ name: "Mason", age: 28 },
// 	{ name: "Harper", age: 39 },
// 	{ name: "Logan", age: 26 },
// 	{ name: "Evelyn", age: 21 },
// ];
// const element=people.find((a)=>{
//     return a.age==33;

// });
// console.log(element.name);
// console.log(`${element.name} is ${element.age} years old`);

const ipp = document.getElementById('ip');
const ch = document.getElementById('check');
let arr = [];
let deleteditems=[];
ch.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id'));
    const element = ipp.value;
    if(element!==''){
    arr.push(element);
    ipp.value = '';
    display();
    }
    else {
        alert("Empty string cannot be listed");
    }
});
function display() {
    // deleted.innerHTML="";
    const display_arr = document.getElementById('disp');
    display_arr.innerHTML="";
    arr.forEach((a,index)=>{
        display_arr.innerHTML+=`<div class="main">
        <div class="dis">${a}
        <button data-index=${index} type="check" id="delete" onclick="deleteitem(this)">Delete</button></div></div>`;

    })
}
function deleteitem(a){
    const index=a.getAttribute('data-index');
    deleteditems.push(arr[index]);
    arr.splice(index,1);
    display();
}
function display_deleteditem(){
    const deleted=document.getElementById("disp");
    // deleted.innerHTML="";
    if(deleteditems.length!==0){
    deleteditems.forEach((a,index)=>{
        deleted.innerHTML+=`<div class="diss">${a}`;
        deleted.innerHTML="";
    });
    }
    else{
        alert("No items have been deleted");
    }

}








