When you need to compile a vanilla .TS file you'll need to use this in the CLI: 

      1. tsc main.ts
      2. tsc src /(remove space and parentheses)*.ts
      This is used to emit any .ts files in the folder src with the default settings.

Core types:

Keep in mind: type INFERENCE

Number:
const numberExample: number = 42;
const numberInferenceConst = 42;
let numberInference: number;
number: 1, 5.3, -10, All numbers, no differentiation between integers or floats.

BREAK
String:
const stringExample: string = "Hello this is a string";
string: 'Hi', "Hi", `Hi`, All text values

BREAK
Boolean:
const guiltyExample: boolean = false;
boolean: true, false. Just these two, no "truthy" or "falsy"

BREAK
Object:
const objectExample: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Award",
  age: 42,
  hobbies: ["sports", "Cooking"],
  role: [2, "author"],
};

object: {age:30}, any js object, more specific types(type of object) are possible.

BREAK
Array:
const arrayExample: number[] = [1, 2, 3, 4, 5];
Array: [1, 2, 3]

BREAK
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
tuple:

const tupleExample: [number, string, boolean] = [25, "Burgers", true];

BREAK
Enum: enum {NEW, OLD}, added by TypeScript: automatically enumerated global constant identifiers. Add labels to numbers(0 indexing). Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure.

enum Role {
  ADMIN = 5,
  READ_ONLY = 2,
  AUTHOR = 3,
}

enum DirectionNumber {
  Up = 1,
  Down,
  Left,
  Right,
}

enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

BREAK
Any: *, Any kind of value, no specific type assignment. TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors. When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

const thisisAnything: any = ["red", 14, "really anything"];

BREAK
Union Types:
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

BREAK
Type Aliases(custom types):

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine("33", 6, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

BREAK
void type: A situation in which a function does not return a value.

BREAK
Function types: essentially a markup of what parameters should be expected and of what type as well as info about what is to be returned.
let combineValues: (a: number, b: number) => number;

BREAK
unknown type: unknown is better to use over the "any" type. unknown is essentially saying, I don't know if the value will end up being a number, string, etc... Used if you don't know what type of value it will be but know what you want to do with it eventually.

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Award";
if (typeof userInput === "string") {
  userName = userInput;
}

BREAK
Never type: Makes it clear to other developers that a particular function will not return any values(in the above example, the generateError function will only throw an error can crash the script, no value is being returned. While (true) {} will also yield a never return type.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);

BREAK
literal types: These types along with union types are used often. Best to think literal when thinking of these types. In resultConversion the value will literally either be "as-number" || "as-text".

function combineSomething(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //literal type AND Union Type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}

