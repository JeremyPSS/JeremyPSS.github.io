`use strict`
var datetime = new Date().toDateString();
console.log(datetime); // it will represent date in the console of developer tool
document.getElementById("time").textContent = datetime; // represent on html page
