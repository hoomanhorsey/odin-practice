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

    console.log("first array - " + first);
    console.log("second array - " + second);
    // var tempArray = [];
    // if (first < second) {
    //   console.log("first is smaller");
    //   tempArray = tempArray.concat(first);
    //   tempArray = tempArray.concat(second);
    // } else {
    //   console.log("second is smaller");
    //   tempArray = tempArray.concat(second);
    //   tempArray = tempArray.concat(first);
    // }
    let i = 0,
      j = 0,
      k = 0;
    var tempArray = [];

    while (i < first.length || j < second.length) {
      console.log("merging");

      if (first[i] === undefined) {
        tempArray[k] = second[j];
        j++;
        k++;
        console.log("First was undefined! Yeah");
        console.log(
          "i: " +
            i +
            ", j " +
            j +
            ", k: " +
            k +
            ", first length: " +
            first.length +
            ", second length: " +
            second.length
        );
      } else if (second[j] === undefined) {
        tempArray[k] = first[i];
        i++;
        k++;
        console.log("Second was undefined! Yeah");
        console.log(
          "i: " +
            i +
            ", j " +
            j +
            ", k: " +
            k +
            ", first length: " +
            first.length +
            ", second length: " +
            second.length
        );
      } else if (first[i] < second[j]) {
        console.log(first[i] + " and " + second[j]);

        tempArray[k] = first[i];
        console.log("first smaller - value of element: " + first[i]);

        i++;
        k++;
        console.log(
          "i: " +
            i +
            ", j " +
            j +
            ", k: " +
            k +
            ", first length: " +
            first.length +
            ", second length" +
            second.length
        );
      } else {
        console.log(first[i] + " and " + second[j]);

        tempArray[k] = second[j];
        console.log("second smaller - value of element: " + second[j]);

        j++;
        k++;
        console.log(
          "i: " +
            i +
            ", j " +
            j +
            ", k: " +
            k +
            ", first length: " +
            first.length +
            ", second length: " +
            second.length
        );
      }
      console.log("tempArray");
      console.log(tempArray);
    }

    return tempArray;
  }
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 9]));

console.log(
  mergeSort([
    82, 17, 5, 32, 99, 7, 44, 25, 61, 38, 73, 49, 16, 2, 90, 57, 29, 86, 63, 41,
    3, 94, 68, 20, 48, 10, 77, 14, 81, 22, 33, 50, 89, 1, 36, 72, 95, 60, 13,
    79, 46, 9, 91, 26, 6, 55, 85, 31, 67, 100,
  ])
);

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));

// while (i < first.length && j < second.length) {
//   if (first[i] < second[j]) {
//     tempArray[k] = leftArray[i];
//     console.log("i: " + i + ", j " + j + ", k: " + k);
//     console.log(tempArray);
//     i++;
//     k++;
//   } else {
//     tempArray[k] = second[j];
//     console.log("i: " + i + ", j " + j + ", k: " + k);
//     console.log(tempArray);
//     j++;
//     k++;
//   }
// }
