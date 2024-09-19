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
  let tally;
  if (n == 1) {
    return n;
  } else {
    tally = n + sumToRecursion(n - 1);
    return tally;
  }
}

console.log("Number: 1, Result: " + sumToRecursion(1));
console.log("Number: 2, Result: " + sumToRecursion(2));
console.log("Number: 3, Result: " + sumToRecursion(3));
console.log("Number: 4, Result: " + sumToRecursion(4));
console.log("Number: 5, Result: " + sumToRecursion(5));
console.log("Number: 100, Result: " + sumToRecursion(9999));
