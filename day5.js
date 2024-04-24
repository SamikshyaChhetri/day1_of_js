const a=new Date();
document.getElementById('date').innerHTML=`The current date and time is:  `+a;


const b=document.getElementById("set_interval");
setInterval(() => {
    b.innerHTML+="Hi i am samikshya"
}, 2000);


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("settime").innerHTML = "hi samikshya...!"
}