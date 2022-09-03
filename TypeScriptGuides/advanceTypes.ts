Intersection Types: typeof, in, instanceof
Can be used with any types and then builds the intersection of these types.
Can sometimes be useful, you won't use them all the time but you may run into situations that Intersection Types may be useful. 

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //Intersection type

const e1: ElevatedEmployee = {
  name: "Award",
  privileges: ["create-server"],
  startDate: new Date(),
};

Another Example:

type Combinable = string | number;  Union type
type Numeric = number | boolean;    Union type

type Universal = Combinable & Numeric; Universal is a Number type because the only type that intersects between Combinable and Numeric is NUMBER.
const episode: Universal = 15;

BREAK
Type Guards(Used more often than intersection types):
1. Help us with union types.

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
The if statement is a type guard using typeof.

Another Example:
type unknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: unknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

const e2: ElevatedEmployee = {
  name: "Bob",
  privileges: ["make-server"],
  startDate: new Date(),
};

printEmployeeInformation(e2);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

BREAK
Discriminated Unions: Helps us with typeguards.
1. Instanceof will not work with INTERFACES.
2. Discriminated union: one common property in each object which describes that object.
3. Useful pattern when working with objects and union types.
interface Bird {
  type: "bird"; Literal type: this most hold a string and that string must be bird.
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; Discriminated union: one common property in each object which describes that object.
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

BREAK
Type Casting: Is some value is of a specific type where TS is unable to detect on it's own, but I as a dev know what it is.

This is ONE version of type casting:

const userInputElement = <HTMLInputElement>(
  document.getElementById("message-output")! message-output is an example of an ID.
); 

Second Version of type casting:

const userInputElement = document.getElementById(
  "message-output"
)! as HTMLInputElement; 
userInputElement.value = "Hi There!";

The Exclamation Mark: !
This will tell TS that the expression in front of it will never yield NULL. If you're not sure it will return null, you'll have to add an IF statement. 

Example:

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi There"';
} this is the alternative to using the exclamation mark.

BREAK
Index Properties:
Good for a case in which we don't need to know in advance which property names we want to use and how many properties we need.

interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

I just know that every property that is added to this object which is based on ErrorContainer must have a property name which can be interpreted as a string and the value for that property also must be a string. 

Pre-defined properties can be added but can only be listed as the same type as the index property. 

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  1: 'this also  also works can a number can be interpreted as a string'
};

BREAK
Function Overloads:
Function overloads are used to describe the types that could be returned from a function. I honestly rather use type casting
(ex: const result = add('award', 'malisi') as string)

!! For some reason the example still has an arrow when I have the split() function on resultSecond, not sure why. To get through this I used TYPECASTING and did the following:
const resultSecond = add("Award", "Malisi") as string;

function addSecond(a: number, b: number): number; Function Overload
function addSecond(a: string, b: string): string; Function Overload
function addSecond(a: string, b: number): string; Function Overload
function addSecond(a: number, b: string): string; Function Overload
function addSecond(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

BREAK
Optional Chaining:
Uses a Question Mark: ?
Useful as a bit of a safety net if you're trying to access something that is UNDEFINED. Another example is data from a backend, such as DATA at the point of it being access is UNDEFINED. Some complex situations you will work with structured nested data where you don't know certainty of some data on a property of an object is set or it is UNDEFINED.

const fetchedUserData = {
  id: "u1",
  name: "Award",
  job: { title: "CEO", description: "My Own Company" },
};

console.log(fetchedUserData?.job?.title);
Add a ? after the thing you're not sure if it is DEFINED or not. This tells TS does THIS(fetchedUserData) exist, if it does then access JOB, and if JOB exists access TITLE.
Helps us safety access nested properties and nested objects in our object data and if the THING in-front of the ? is UNDEFINED it will not access the thing AFTER and will not return a run-time error but instead it will just not continue.

BREAK
Nullish Coalescing:
Use: ??
When you don't know if the data is NULL, UNDEFINED or is a valid piece of data. Null, and Undefined are treated as falsy values. An empty string is treated as a falsy value. IF IT IS NOT NULL OR UNDEFINED WE WILL USE THE VALUE TO THE LEFT.

MAYBE you do want a empty value to come there? *the big question!

The OR operator:
const user2Input = "";
const storedData2 = userInput || "DEFAULT";
console.log(storedData2, "hello there two");
//Result: "DEFAULT" "hello there two"

Nullish Coalescing:
const userInput = "";
const storedData = userInput ?? "DEFAULT8";

console.log(storedData, "Hello");
//Result: ""




