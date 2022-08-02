export function displayarray(arraylist) {
  console.log(arraylist);

  const griddiv = document.getElementById("griddiv");
  griddiv.innerHTML = "";

  for (let i = 0; i < arraylist.length; i++) {
    let newgridelement = document.createElement("div");
    let height = 0;
    if (arraylist.length == 100) {
      newgridelement.setAttribute("class", "gridelement100");
      height = arraylist[i];
    } else {
      newgridelement.setAttribute("class", "gridelement");
      height = arraylist[i] * 10;
      newgridelement.innerText = arraylist[i];
    }

    newgridelement.setAttribute("id", i);

    height = height.toString() + "%";
    newgridelement.style.height = height;
    griddiv.appendChild(newgridelement);
  }

  //   for (let i = 0; i < arraylist.length; i++) {
  //     for (let j = 0; j < arraylist[i]; j++) {
  //       let newgridelement = document.createElement("div");
  //       newgridelement.setAttribute("class", "gridelement");
  //       newgridelement.style.gridColumn = i + 1;
  //       newgridelement.style.gridRow = 10 - j;
  //       griddiv.appendChild(newgridelement);
  //     }
  //  }
}
