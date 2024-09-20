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
console.log("Number: 100, Result: " + sumToRecursion(9999));

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

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

function all(array, callback) {
  // base
  array.forEach((e) => {
    console.log(e);
  });
  // recursive bit
}

all([1, 2, 9], function (num) {
  return num < 7;
});

function callback() {
  console.log("callback function placeholder");
}
console.log(
  all([1, 2, 9], function (num) {
    return num < 7;
  })
); // false

// Question 5: Product of an array

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Question 6: Search JS object

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Question 7: Parse a multi-dimensional array

// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Question 8:

// Write a function that sums squares of numbers in list that may contain more lists

// Question 9:

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
