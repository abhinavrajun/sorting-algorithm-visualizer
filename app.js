import { displayarray } from "./displayarray.js";
import { bublesort, bblSort } from "./sort.js";
window.addEventListener("DOMContentLoaded", () => {
  const newarray = document.getElementById("array");
  const sortbutton = document.getElementById("sortbutton");
  let newarraylist = [];
  newarray.addEventListener("click", (event) => {
    event.preventDefault();
    newarraylist = getnewarray();
    displayarray(newarraylist);
  });
  sortbutton.addEventListener("click", (event) => {
    event.preventDefault();
    bblSort(newarraylist, newarraylist.length);
  });
});

function getnewarray() {
  let arraylist = [];
  for (let i = 0; i < 10; i++) {
    arraylist.push(getrandom());
  }
  return arraylist;
}
function getrandom() {
  return Math.floor(Math.random() * 10) + 1;
}
