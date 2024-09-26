// Xn = X*(n-1) + X(n-2)

// get term =
// x = x(n-1) + x (n -2)

//So to iterate:
// n0 = 0
// n1 = 1
// if n > 1
// F(n-1) + F(n-2) = Fn

// n2 = 1
// F(1) + F(0) = 1
// n3 =
// F(2) + F(1) = 2
// n4 =
// F(3) + F(2) = 3

function fibiIterate(n) {
  console.log("Start call. Iterator be: " + n);
  var resultLessTwo = 0;
  var resultLessOne = 1;
  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else {
    for (let i = 2; i < n + 1; i++) {
      result = resultLessTwo + resultLessOne;

      //   result = n * (n - 1) + n * (n - 2);

      console.log("logging iteration:  result: " + result);
      //   }
      resultLessTwo = resultLessOne;
      resultLessOne = result;
    }
  }
  console.log("Final Result " + result);

  console.log("End Call");
  console.log("");
}

//   console.log(result);

fibiIterate(0);
fibiIterate(1);
fibiIterate(2);
fibiIterate(3);
fibiIterate(9);

function fibiRecurse(n) {
  //base
  if (n < 2) return n;
  else {
    console.log("called recursion. Value of n is: " + n);

    return fibiRecurse(n - 1) + fibiRecurse(n - 2);
  }
}

console.log("fibiRecurse. result: " + fibiRecurse(1));
console.log("fibiRecurse. result: " + fibiRecurse(2));
console.log("fibiRecurse. result: " + fibiRecurse(3));
console.log("fibiRecurse. result: " + fibiRecurse(4));
console.log("fibiRecurse. result: " + fibiRecurse(5));
console.log("fibiRecurse. result: " + fibiRecurse(6));
console.log("fibiRecurse. result: " + fibiRecurse(7));
console.log("fibiRecurse. result: " + fibiRecurse(8));

// function fibiIterate(value) {
//     let x = 0;
//     for (let i = value; i > 0; i--) {
//       x += 1;
//       console.log("fibiprint", +i + " " + x);
//     }
//     console.log(x);
//   }

// function fibiIterate(value) {
//     let x = 0;
//     let y = 0;
//     let number = 0;
//     for (let i = 0; i < value; i++) {
//       x += 1;

//       number = y * (value - 1) + y * (value - 2);
//       y++;

//       console.log("fibiprint", +value + " " + i + " " + x + " " + y);
//     }
//     console.log(x);
//     console.log(y);
//     console.log(number);
//   }
