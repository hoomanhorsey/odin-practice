function sumToLoop(n) {
  let total = 0;

  for (let i = 0; i < n + 1; i++) {
    // console.log("pre addition total:" + total);

    total = i + total;
    console
      .log
      //   "number: " + n + ", iterator: " + i + ": running total:" + total
      ();
  }

  console.log("number: " + n, total);
}

sumToLoop(1);
sumToLoop(2);
sumToLoop(3);
sumToLoop(4);
sumToLoop(5);
sumToLoop(1000);

function sumToRecursion(n) {
  // let tally;
  if (n == 1) {
    return n;
  } else {
    return n + sumToRecursion(n - 1);
    // return tally;
  }
}

console.log("Number: 1, Result: " + sumToRecursion(1));
console.log("Number: 2, Result: " + sumToRecursion(2));
console.log("Number: 3, Result: " + sumToRecursion(3));
console.log("Number: 4, Result: " + sumToRecursion(4));
console.log("Number: 5, Result: " + sumToRecursion(5));
console.log("Number: 100, Result: " + sumToRecursion(999));

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log("Power " + power(2, 4));
console.log(power(2, 3));
console.log(power(2, 2));
console.log(power(2, 1));
console.log(power(2, 0));

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial " + factorial(5));

// Question 4: Check all values in an array
// Write a function called all which
// accepts an array and a callback; and
// returns true if
// every value in the array returns true when passed as parameter to the callback function

function all1(array, callback) {
  // base

  if (callback(array[0] == true) && array.length == 0) {
    return true;
  } else if (!callback(array[0])) {
    console.log("called false");
    return false;
  } else {
    array.shift(); //removes first element from array
    console.log(array);
    return all1(array, callback);
  }
}

console.log(
  all1([9, 2, 1], function (num) {
    return num < 7;
  })
);

// Question 5: Product of an array

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// pseduocode

// function productOfArray()
// take array
//   shallow copy array
//   declare product
//   exit - if array length is 1, return array[1]???  If array.lenght is zero, then array is empty -what are you returning to multiply against???

//   else

//     product is the first number of array (only on first iteration)
//     array - delete first item from array
//     product = array[0] x productOfArray(array)

function productOfArray(array) {
  var copyOfArray = copyOfArray || array.slice();
  // console.log(copyOfArray);

  var product = product || 0;
  if (copyOfArray.length === 1) {
    return copyOfArray[0];
  } else {
    product = copyOfArray[0];
    // console.log(product);
    copyOfArray.shift();
    // console.log(copyOfArray);

    return product * productOfArray(copyOfArray);
  }
}

var six = productOfArray([1, 2, 3]); // 6
console.log(six);
var sixty = productOfArray([1, 2, 3, 10]); // 60
console.log(sixty);

// Question 6: Search JS object

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// first test. Return if object contains a non-object, i.e. a variable or a string.
function contains(nestedObject, n) {
  console.log(nestedObject.data);
  // console.log(nestedObject.data.info.stuff.thing.moreStuff.magicNumber);

  // Wrapping an object in Object() return the value of the object, whereas putting a primitive in there wraps it in an object
  // If it is a primative, the test returns an Object which is != to the primitive value
  // If it is an object, an object is return so the 2 objects are ===.
  if (nestedObject !== Object(nestedObject)) {
    console.log(nestedObject);
    return false; // what do I return?;
  } else {
    for (let key in nestedObject) {
      console.log(key);
      console.log(nestedObject[key]);

      if (nestedObject[key] === n) {
        // alert("yay");
        return true;
      } else {
        return contains(nestedObject[key], n);
      }
    }

    console.log(nestedObject);
    // return contains(nestedObject, n);
  }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);

// let testypoo = contains("boo", 69);

// Question 7: Parse a multi-dimensional array

// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array) {
  let x = 0;

  var copyArray = copyArray || array.slice();
  console.log("calling function ");
  console.log(copyArray);
  if (copyArray.length === 0) {
    return x;
  } else {
    // check to see if copyArray[0] is an array .
    // If not an array, go straight to test.

    // If array, then check values...

    // for (let value of copyArray[0]) {
    console.log(copyArray[0]);
    //   console.log(value);
    //   console.log(Array.isArray(value));

    if (Array.isArray(copyArray[0])) {
      for (let value of copyArray[0]) {
        return totalIntegers(value);
      }
    } else {
      let value = copyArray[0];
      console.log("first test");
      console.log(value);

      if (typeof value === "number") {
        console.log("yay a number " + value);
        console.log(copyArray);

        // copyArray = copyArray[0].slice(1);
        console.log("return, after a number");
        x++;
        return copyArray;
      } else {
        alert("not a number, boo" + copyArray[0]);
        copyArray = copyArray[0].slice(1);

        console.log(copyArray);
        console.log("return, after no number");

        return totalIntegers(copyArray);
      }
    }
    console.log("return");

    copyArray = copyArray.slice(1);
    console.log(copyArray);

    return totalIntegers(copyArray);
  }
}

function totalIntegers(array) {
  // base
  console.log("running testIntegers");
  let tally = 0;
  if (!Array.isArray(array)) {
    console.log("test, not an array");
    return tally;
  } else {
    for (let value of array) {
      console.log("running the let value of array loop");
      console.log(value, array);
      if (Array.isArray(value)) {
        console.log(value);
        tally += totalIntegers(value);
      } else {
        if (typeof value !== "number") {
          console.log("No number. But value is:  " + value);
        } else {
          console.log("Found a number. Value is: " + value);
          tally = tally + 1;
          console.log("tally " + tally);
        }
      }
    }
  }
  return tally;
}

var result = totalIntegers([
  0,
  3,
  8,
  [3, 5, "fish", 8, 7],
  ["foo"],
  [],
  [4, [5, 6]],
  [[5], 3],
]); // 7
console.log("result: ", result);

var testy = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log("testy result: ", testy);

// Question 8:

// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(array) {
  //base
  if (array.length === 0) return 0;

  let sum = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    sum += SumSquares(first);
  } else if (Number.isInteger(first)) {
    sum += first * first;
  }
  return sum + SumSquares(array);
}

var l = [1, 2, 3];

console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

//psuedo code

// declare empty array [ ]
//base
// if iteration < 0 , return empty array

// recursion

// function replicate(iterations, value) {
//   let array = [];
//   if (iterations < 1) {
//     return array;
//   } else {
//     return (value += replicate(iterations - 1, value));
//   }
// }

function replicate(iterations, value) {
  const array = [];
  if (iterations < 1) {
    console.log("base return");
    // console.log(array);

    return array;
  } else {
    array.push(value);
    // console.log(array);
    return array.concat(replicate(iterations - 1, value));
  }
}
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

// 1. Iterations 3>1, go to else
//   1a array = [5]
//     1b replicate(2, 5)
//         2 Iterations 2 > 1, go to else
//           2a array = [5]
//             2b replicate (1, 5)
//               3 Iterations 1 !< 1, go to else
//                 3a array = [5]
//                   3b replicate (0, 5)
//                     Iterations 0 < 1, go back up the line and return...array
//                   return
