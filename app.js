import { displayarray } from "./displayarray.js";
import { bblSort } from "./sort.js";
window.addEventListener("DOMContentLoaded", () => {
  const newarray = document.getElementById("array");
  const sortbutton = document.getElementById("sortbutton");
  let newarraylist = [];
  const newarray100 = document.getElementById("array100");
  newarray100.addEventListener("click", (event) => {
    event.preventDefault();
    newarraylist = getnewarray(100);
    displayarray(newarraylist);
  });
  newarray.addEventListener("click", (event) => {
    event.preventDefault();
    newarraylist = getnewarray(10);
    displayarray(newarraylist);
  });
  sortbutton.addEventListener("click", (event) => {
    event.preventDefault();
    bblSort(newarraylist, newarraylist.length);
  });
});

function getnewarray(len) {
  let arraylist = [];
  for (let i = 0; i < len; i++) {
    arraylist.push(getrandom(len));
  }
  return arraylist;
}
function getrandom(len) {
  return Math.floor(Math.random() * len) + 1;
}
