const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  setInterval(() => {
    const hr = document.getElementById("hrs");
    const min = document.getElementById("minute");
    const sec = document.getElementById("second");
    const mon = document.getElementById("month");
    const dayy = document.getElementById("day");
    const datee = document.getElementById("dat");
    const date = new Date();
    if (date.getHours() > 12) {
      if (date.getHours() < 22) {
        hr.innerHTML = "0" + (date.getHours() - 12) + ":";
      } else {
        hr.innerHTML = date.getHours() - 12 + ":";
      }
    } else {
      if (date.getHours() < 10) {
        hr.innerHTML = "0" + date.getHours() + ":";
      } else {
        hr.innerHTML = date.getHours() + ":";
      }
    }
    if (date.getMinutes() < 10) {
      min.innerHTML = "0" + date.getMinutes() + " : ";
    } else {
      min.innerHTML = date.getMinutes() + ":";
    }
    if (date.getSeconds() < 10) {
      sec.innerHTML = "0" + date.getSeconds();
    } else {
      sec.innerHTML = date.getSeconds();
    }
    const hehe = document.getElementById("state");
    if (date.getHours() < 12) {
      hehe.innerHTML = "AM";
    } else {
      hehe.innerHTML = "PM";
    }
    mon.innerHTML = monthName[date.getMonth()] + ",";
    dayy.innerHTML = dayName[date.getDay()];
    datee.innerHTML = date.getDate();
  }, 1);
  