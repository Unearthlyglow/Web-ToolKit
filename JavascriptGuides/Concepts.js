Undefined:
JavaScript assigns 'undefined' to any object that has been declared but not initialized or defined. In other words, in a case where no value has been explicitly assigned to the variable, JavaScript calls it 'undefined'

BREAK
Null:
In JavaScript, null is a special value that represents an empty or unknown value. For example, let number = null


BREAK
The Conditional (Ternary) Operator:
This translate to: If age is greater than or equal to 21 then console will print "I like to drink Wine", if not: "I like to drink Water"

const age = 15;

age >= 21
  ? console.log("I like to drink Wine")
  : console.log("I like to Drink Water");
  
BREAK
Some QuerySelector Info -
With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an element by its ID. Generally, you should opt for the selector that most clearly gets the job done.

document.querySelector("#unique_id"); //ID Example
document.querySelector(".element_class"); //Class Example
document.querySelectorAll();
document.getElementById(); //Only allows the selection of a unique ID.


Switch statement(Section 2 - Ch 26)
Can be used in place of a complex if/else statement. Generics, Object Literal indexing, and OOP Polymorphism.

const day = "monday";

switch (day) {
  case "monday": // day === 'monday', strict comparison
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

BREAK
Expressions produce values(Section 2 - Chapter 27)

BREAK
Statements are like full sentences that translate are actions. Actions we want our program to perform.

BREAK
Dot vs Bracket Notation(Section 2 - Chapter 43)
const award = {
  firstName: "Award",
  lastName: "Malisi",
  age: 55,
  job: "WD",
  hobbies: ["Music", "Sports"],
};

console.log(award.lastName);

console.log(award["lastName"]); //bracket notation => 'Malisi
const nameKey = "Name";
console.log(award["first" + nameKey]);
console.log(award["last" + nameKey]);

BREAK
Call and Apply.
Apply is like Call except it takes an array:
const flightData = [583, 'George Cooper]
book.apply(swiss, flight Data)
Apply is not used very often anymore.
book.call(swiss, ...flightData ) //The Spread Operator.
Bind also allows us to set the THIS keyword for any function call.
Bind does not immediately call a function but returns a function with the this keyword.

const bookEW = book.bind(euroWings); 
bookEW will now be a function returned that has the the THIS keyword bound to euroWings.

With addeEventListener the THIS keyword gets associated with the element it is listed on which in this example is a BUTTON. You'll need to add the bind method at the end of the method and have the first parameter be the object you want the THIS keyword to be tied to .
document
  .querySelector(".buy")
  ?.addEventListener("click", lufthansa.buyPlane.bind(lufhansa));

Partial Application: The idea of having pre-set parameters for a function. Below is an example of setting a pre-set parameter and using the bind keyword.

const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200);

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

BREAK
Manipulating CSS Styles -
const bodyBackground = document.querySelector(".bodyClass");

We can't use background-color so we have to use backgroundColor instead.
bodyBackground.style.backgroundColor = "red";

BREAK
Regular Expressions - 
//Head to https://regexr.com/


BREAK
Fixing capital letters in name

const passenger = 'aWarD';
const passenger2 = 'BOb';

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const passenger2Lower = passenger2.toLowerCase();
const correctPassenger2 =
  passenger2Lower[0].toUpperCase() + passenger2Lower.slice(1);

console.log(correctPassenger2);

BREAK
Replacing:

const priceGB = '288,97%';
const priceUS = priceGB.replace('%', '$').replace(',', '.');
console.log(priceUS);


BREAK
Computed properties:

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

BREAK
Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

BREAK
Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];




BREAK
Switching Variables:

[main, secondary] = [secondary, main];
console.log(main, secondary);

BREAK

Receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

BREAK
Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values, useful if you are obtaining info from an API and dont know many items are within an array.
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

SECTION: 105 - The Spread Operator.
THE BAD WAY without The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//The GOOD way with the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
//Same as below:
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);
IMPORTANTThe spread operator takes all the elements form  the array and it doesn't create new variables and as a consequence we can only use it in places where we would otherwise write values separated by commas.
IMPORTANT

BREAK
Creating a shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];

BREAK
Joining 2 arrays or more.
const lastMenu = [...mainMenuCopy, ...restaurant.starterMenu];

console.log(lastMenu);

// Iterables: Arrays, strings, maps, sets, but NOT objects.

const str = 'Award';
const letters = [...str, ' ', 's.'];

console.log(letters);
console.log(...str);

IMPORTANT: Multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.

Real World Example, See above function of orderPasta.
const ingredients = [
   prompt("Let's make pasta! Ingredient 1?"),
   prompt('Ingredient 2'),
   prompt('Ingredient 3'),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

BREAK
Objects Destructuring
const newRestaurant = { foundedIn: 1950, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

SECTION 106 - Rest Pattern And Parameters

SPREAD, because on RIGHT SIDE of =
const array1 = [1, 2, ...[3, 4]];

REST Pattern because on LEFT side of others
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

Objects:
const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

Functions:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 6, 1, 2, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(
  'Mushrooms',
  'Onion',
  'Sausage',
  'Pepperoni',
  'Another PIZZA ON TOP'
);

restaurant.orderPizza('Mushrooms');



BREAK
Section 107 - Short Circuiting (&& and ||)
Use ANY data type, return ANY data type, short-circuiting: If the first operand is true, it will use the first operand.

console.log('------------------OR------------');
The OR operator (||) will return the first truthy value OR the last value.
console.log(3 || 'Award'); Expected Output: 3
console.log('' || 'Award'); Expected Output: Award; an empty string is a falsy value.
console.log(true || 0); Expected Output: True
console.log(undefined || null); Expected Output: null; undefined is a falsely value.
console.log(undefined || 0 || '' || 'Hello' || 23 || null); 
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------------AND---------------');

When it is truthy, the evaluation continues and the last evaluation is returned. If the first value is false, then it will return it because there is no other reason to go beyond the evaluation when the first value is false. The AND(&&) operator will return the first falsy value or the last value if all of the values are truthy.
console.log(0 && 'Jonas');
console.log(7 && 'Award');

console.log('Hello' && 23 && null && 'Jonas');


Section 108: The Nullish Coalescing Operator(??)
Nullish values: Null and undefined(NOT 0 or '', not considered falsy values) If the first value is not null or undefined then it will use that value. 

In this example, numGuests = 0 and is neither Null or undefined therefore 0 is accepted:

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//SECTION 109: Logical Assignment Operators

//The OR Assignment Operator
const rest1 = {
  name: 'Capi',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;

//The Nullish Assignment Operator: Null or Undefined.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);


BREAK
SECTION 113: Optional Chaining (?.) If a certain property doesn't exist, undefined is returned.


BREAK
SECTION 116: Sets: Elements are unique, order of elements in the set are irrelevant. Main use case is to remove duplicate values of an array. Sets are not intended to replace arrays! Arrays are used to manipulate data.
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Award'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza')); //True
console.log(orderSet.has('Bread')); //False

orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter']).size);

//Counting Characters
console.log(new Set('AwardMalisi').size);

BREAK
SECTION 117: Maps Fundamentals "A lot more useful than SETS":
A map is a data structure where we can map values to keys. Big difference between objects, is that the keys of maps can be ANY types while Object's keys are always strings.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(true, 'We are open AND SERVING!')
  .set(false, 'We are closed : (');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2); //The Removal of Lisbon

// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1, 2])); //This will not work!
console.log(rest.get(arr)); //This WILL WORK

Deconstucting 