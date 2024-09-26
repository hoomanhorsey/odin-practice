function mergeSort(array) {
  if (array.length < 2) {
    console.log("returning now!");
    return array;
  } else {
    console.log("starting recursive function: array");
    console.log(array);

    halfLength = Math.floor(array.length / 2);
    var leftArray = [];
    var rightArray = [];

    leftArray = array.slice(0, halfLength);
    rightArray = array.slice(halfLength, array.length);

    console.log("leftArray");
    console.log(leftArray);
    console.log("rightArray");
    console.log(rightArray);

    var first = [];
    first = first.concat(mergeSort(leftArray));

    var second = [];
    second = second.concat(mergeSort(rightArray));

    console.log("first " + first);
    console.log("second " + second);
    var tempArray = [];
    if (first < second) {
      console.log("first is smaller");
      tempArray = tempArray.concat(first);
      tempArray = tempArray.concat(second);
    } else {
      console.log("second is smaller");
      tempArray = tempArray.concat(second);
      tempArray = tempArray.concat(first);
    }
    console.log(tempArray);
    return tempArray;
  }
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
