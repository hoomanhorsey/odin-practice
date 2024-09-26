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
    console.log("arrays for sorting in temp temp");

    console.log("leftArray");
    console.log(leftArray);
    console.log("rightArray");
    console.log(rightArray);

    mergeSort(leftArray);
    mergeSort(rightArray);

    var temptempArray = [];
    var i = 0;
    var j = 0;
    var k = 0;
    console.log(array.length);

    //note the arrays aren't sorted so they aren't being merged propery
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        temptempArray[k] = leftArray[i];
        console.log("i: " + i + ", j " + j + ", k: " + k);

        console.log(temptempArray);
        i++;
        k++;
      } else {
        temptempArray[k] = rightArray[j];
        console.log("i: " + i + ", j " + j + ", k: " + k);

        console.log(temptempArray);

        j++;
        k++;
      }
    }

    for (; i < leftArray.length; i++) {
      temptempArray[k] = leftArray[i];
    }
    for (; j < leftArray.length; j++) {
      temptempArray[k] = leftArray[i];
    }
    console.log("temptempArray");
    console.log(temptempArray);

    return temptempArray;
  }

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
}

function smergeSort(array) {
  if (array < 2) {
    console.log("hit base case. Returning:");
    console.log(array);
    return array;
  } else {
    console.log("array entered into recursive bit");
    console.log(array);
    halfLength = Math.floor(array.length / 2);
    var leftArray = [];
    var rightArray = [];

    leftArray = array.slice(0, halfLength);
    rightArray = array.slice(halfLength, array.length);
    console.log("leftArray and rightArray");
    console.log(leftArray);
    console.log(rightArray);

    //merge
    let temporaryArray = [];
    for (let i = 0; i < halfLength; i++) {
      var first = leftArray.shift();
      var second = rightArray.shift();

      console.log("first and second" + first + second);

      if (first < second) {
        temporaryArray.unshift(first);
        first = leftArray.shift();
      } else {
        temporaryArray.unshift(second);
        second = rightArray.shift();
      }
    }

    console.log("smergeSort tempyarray");
    console.log(temporaryArray);
  }

  return smergeSort(leftArray);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(smergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

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
