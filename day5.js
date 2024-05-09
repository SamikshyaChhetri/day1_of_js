const a = new Date();
document.getElementById("date").innerHTML =
  `The current date and time is:  ` + a;

const b = document.getElementById("set_interval");
setInterval(() => {
  b.innerHTML = "Hi i am samikshya";
}, 2000);
const myTimeout = setTimeout(() => {
  document.getElementById("settime").innerHTML = "hi samikshya...!";
}, 5000);
// function myGreeting() {
//   document.getElementById("settime").innerHTML = "hi samikshya...!"
// }
//----->NOTES<----
// getDate(): Returns the day of the month (1-31).
// getDay(): Returns the day of the week (0-6), where 0 represents Sunday.
// getFullYear(): Returns the year (4 digits for dates between year 1000 and 9999).
// getHours(): Returns the hour (0-23).
// getMilliseconds(): Returns the milliseconds (0-999).
// getMinutes(): Returns the minutes (0-59).
// getMonth(): Returns the month (0-11), where 0 represents January.
// getSeconds(): Returns the seconds (0-59).
// getTime(): Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).
