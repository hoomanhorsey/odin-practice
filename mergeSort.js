function mergeSort(array) {
  if (array.length < 2) {
    console.log("end of array");
    console.log(array);
    return array;
  } else {
    // if (array.length > 2) var halfLength = 0;

    // halves the array into 2 arrays.
    halfLength = Math.floor(array.length / 2);
    var leftArray = [];
    var rightArray = [];

    leftArray = array.slice(0, halfLength);
    rightArray = array.slice(halfLength, array.length);

    console.log("halflength: " + halfLength);
    console.log("leftArray");
    console.log(leftArray);
    console.log("rightArray");
    console.log(rightArray);

    // if (leftArray.length < 2) {
    //   console.log("calling right");
    //   return mergeSort(rightArray);
    // } else {
    //   console.log("calling left");
    //   return mergeSort(leftArray);

    // mergeSort(rightArray);

    // let tempArray = [];
    // if (leftArray[0] < rightArray[0]) {
    //   tempArray.push(leftArray[0]);
    //   tempArray.push(rightArray[0]);
    // } else {
    //   tempArray.push(rightArray[0]);
    //   tempArray.push(leftArray[0]);
    // }
    // mergeSort(leftArray);
    // console.log(tempArray);

    mergeSort(leftArray);

    let tempyArray = [];
    for (let i = 0; i < halfLength; i++) {
      console.log(leftArray[i]);
      if (leftArray[i] < rightArray[0]) {
        tempyArray.push(leftArray[i]);
      } else {
        tempyArray.push(rightArray[0]);
      }
    }

    console.log("tempyArray");
    console.log(tempyArray);

    // mergeSort(rightArray);

    return tempyArray;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));
// console.log(mergeSort([15, 9, 10, 110, 98]));

///pseduocode

// identify length of array (array.length/2)

// left half of array is array[(array.length/2)-1]
// put contents into LeftArray
// right half of array is array[array.length/2]
// put contents into RightArray

// check - if leftArray.length > 1
//mergeSort(leftArray)

// check -  if LeftArray.lenght < 2, if not
// mergeSort(rightArray)

// else if length = 1
// create temp array[]
// then compare left array with right array
// if left array is smaller, then put left array item into new array first
//    else, put right array item into new array

// if Left Array.length is less than 2, then mergeSort(rightARray)

// sort left half of array
// sort right half of array
// merge two together.
