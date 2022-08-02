export async function bublesort(arr, n) {
  const gridelement = document.getElementsByClassName("gridelement");
  console.log(arr);

  if (n == 1) {
    for (let i = 0; i < arr.lenght; i++) {
      gridelement[i].classList.add("finished");
    }
    return;
  }

  let count = 0;

  let point = 0;
  for (let i = 0; i < n - 1; i++) {
    point += 1;
    gridelement[i].style.backgroundColor = "green";
    gridelement[i + 1].style.backgroundColor = "green";
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 100);
    });

    let result = await promise1;

    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      count++;
      let height1 = arr[i] * 10;
      height1 = height1.toString() + "%";
      let height2 = arr[i + 1] * 10;
      height2 = height2.toString() + "%";

      gridelement[i].style.height = height1;
      gridelement[i + 1].style.height = height2;
      gridelement[i].innerText = arr[i];
      gridelement[i + 1].innerText = arr[i + 1];
    }
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 300);
    });

    let result1 = await promise;

    gridelement[i].style.backgroundColor = "aqua";
    gridelement[i + 1].style.backgroundColor = "aqua";
  }
  gridelement[point].classList.add("finished");
  //   gridelement[point].classList.remove("gridelement");

  if (count == 0) {
    for (let i = 0; i < arr.lenght; i++) {
      gridelement[i].classList.add("finished");
    }

    return;
  }
  bublesort(arr, n - 1);
}
export async function bblSort(arr) {
  const gridelement = document.getElementsByClassName("gridelement");
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      gridelement[j].classList.add("current");
      gridelement[j + 1].classList.add("current");
      let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 100);
      });

      let result = await promise1;
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        let height1 = arr[j] * 10;
        height1 = height1.toString() + "%";
        let height2 = arr[j + 1] * 10;
        height2 = height2.toString() + "%";

        gridelement[j].style.height = height1;
        gridelement[j + 1].style.height = height2;
        gridelement[j].innerText = arr[j];
        gridelement[j + 1].innerText = arr[j + 1];
      }
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 300);
      });

      let result1 = await promise;
      gridelement[j].classList.remove("current");
      gridelement[j + 1].classList.remove("current");
    }
    gridelement[arr.length - i - 1].classList.add("finished");
  }
  // Print the sorted array
  console.log(arr);
}
