console.log("hi");
function mergeSort(array) {
  if (array.length < 2) return array;
  else {
    if (array.length > 2) var halfLength = 0;

    halfLength = Math.floor(array.length / 2);
    var leftArray = [];
    var rightArray = [];

    leftArray = array.slice(0, halfLength);
    rightArray = array.slice(halfLength, array.length);

    console.log(halfLength);
    console.log("leftArray");
    console.log(leftArray);
    console.log("rightArray");
    console.log(rightArray);

    if (leftArray.length < 2) {
      return mergeSort(rightArray);
    } else {
      return mergeSort(leftArray);
    }
  }
  return array;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([15, 9, 10, 110, 98]));

///pseduocode

// identify length of array (array.length/2)

// left half of array is array[(array.length/2)-1]
// put contents into LeftArray
// right half of array is array[array.length/2]
// put contents into RightArray

// chech if LeftArray.lenght < 2, if not
// mergeSort(Array)

// else if length = 1
// create temp array[]
// then compare left array with right array
// if left array is smaller, then put left array item into new array first
//    else, put right array item into new array

// if Left Array.length is less than 2, then mergeSort(rightARray)

// sort left half of array
// sort right half of array
// merge two together.
