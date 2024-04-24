const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
setInterval(() => {
    const hr = document.getElementById("hrs");
    const min = document.getElementById("minute");
    const sec = document.getElementById("second");
    const mon = document.getElementById("month");
    const dayy = document.getElementById("day");
    const datee = document.getElementById("dat");
    const date = new Date();
    hr.innerHTML = date.getHours() + " : ";
    min.innerHTML = date.getMinutes() + " : ";
    sec.innerHTML = date.getSeconds();
    mon.innerHTML=monthName[date.getMonth()]+",";
    dayy.innerHTML =dayName[date.getDay()];
    datee.innerHTML = date.getDate();
}, 1);



