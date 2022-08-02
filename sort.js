export async function bblSort(arr) {
  let time1 = 0;
  let time2 = 0;
  let gridelement;
  let len = arr.length;
  if (arr.length === 10) {
    gridelement = document.getElementsByClassName("gridelement");
    time1 = 100;
    time2 = 300;
  } else {
    gridelement = document.getElementsByClassName("gridelement100");
    time1 = 0.1;
    time2 = 0.1;
  }
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      gridelement[j].classList.add("current");
      gridelement[j + 1].classList.add("current");
      let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), time1);
      });

      let result = await promise1;
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        let height1 = 0;
        let height2 = 0;
        if (len === 10) {
          height1 = arr[j] * 10;
          height2 = arr[j + 1] * 10;
          gridelement[j].innerText = arr[j];
          gridelement[j + 1].innerText = arr[j + 1];
        } else {
          height1 = arr[j];
          height2 = arr[j + 1];
        }
        height1 = height1.toString() + "%";
        height2 = height2.toString() + "%";

        gridelement[j].style.height = height1;
        gridelement[j + 1].style.height = height2;
      }
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), time2);
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
