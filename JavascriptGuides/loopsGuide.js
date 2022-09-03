// for loops are commonly used to run code a set number of times. Also, you can use break to exit the loop early, before the condition expression evaluates to false.

// for loop - We use for loop when we are certain about how many times we are going to iterate over a block of code.

for (let i = 0; i < 9; i++) {
  console.log(i);
}
let simpsons = ["Lisa", "Bart", "Marge"];

for (let i = 0; i < simpsons.length; i++) {
  console.log(simpsons);
}

// Use break to exit out of a for loop before condition is false:

for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }
  console.log("Total elephants: " + i);
}

BREAK
//The ForIn Loop is for looping through objects.

let placeObj = {
  color: "red",
  material: "brick",
  rooms: 3,
};

for (let key in placeObj) {
  console.log(key + ":" + placeObj[key]);
}

BREAK
//The forOF loop iterates over the values of many types of iterables, including arrays, and special collection types like Set and Map. For each value in the iterable object, the code in the code block is executed.

const arr = ["Fred", "Tom", "Bob" ];

for (let i of arr) {
  console.log(i);
}

// Iterate over a Map:

const m = new Map();
m.set(1, "black");
m.set(2, "red");

for (let n of m) {
  console.log(n)
}

// Iterate over a Set:
const s = new Set();
s.add(1);
s.add("red");

for (let n of s) {
  console.log(n);
}

BREAK
// while loop: The while loop starts by evaluating condition. If condition evaluates to true, the code in the code block gets executed. If condition evaluates to false, the code in the code block is not executed and the loop ends.

// while loop - When we are not certain about the number of iterations, we use the while loop.

let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

BREAK
// do...while loop: The do...while loop is closely related to while loop. In a do...while loop, condition is checked at the end of each iteration of the loop, rather than at the beginning before the loop runs.

// This means that code in a do...while loop is guaranteed to run at least once, even if the condition expression already evaluates to true.

// do while loop - Even if the condition is false, the do while loop will execute at least 1 time.

let j = 1;

do {
  console.log(i);
  j++;
} while (j < 10);

const myArray = [];
let p = 10;

do {
  myArray.push(i);
  p++;
} while (p < 10);

console.log(myArray);
