BREAK
Generic Types vs Unions:

1. Generics help lock things down while in Unions things are a bit freeier and can lead to issues/mixed types when there shouldn't be. 

2.(Better Explanation than above) Union types can be great if when you call a function you want to be flexible with the types you're working. Generics are great to Lock in a type throughout an entire class instance or through a function. 

BREAK
Generics:

1. Better type safety.

2. Help by giving additional type information when you have a complex class or function that does something with the data that is coming in, in a way that where it doesn't really care about the data being of one particular type, but where you want to store the type information of the incoming data to get better TS support whenever you work with your generic type.

const names: Array<string> = []; the same as string[]
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

BREAK
Creating a Generic Function:
 T = TYPE(Be aware you can use any, however T is the convention)

 The important and magical part is that the TYPES are not set in stone when the function is created but RATHER set dynamically when the function is called.
 The Code below is cancelled out because it is being used AGAIN in the Working with Constraints section below:
 Hover over mergedObj and you'll see that TS infers the TYPES(which is great)

Good Example:
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Award", hobbies: ["Dancing", 43, true] },
  { age: 53 }
);

console.log(mergedObj)

You can also strictly set the types however this is redundant.

Example:
const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Award", hobbies: ["Dancing"] },
  { age: 53 }
);

console.log(mergedObj.age);

BREAK
Working With Constraints:

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Award", hobbies: ["Dancing"] },e
  { age: 53 }
);

console.log(mergedObj.age);

BREAK
Another Generic Function:

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
  let descriptionText = "Got no value.";
  if (el.length === 1) {
    descriptionText = "Got 1 element";
  } else if (el.length > 1) {
    descriptionText = "Got " + el.length + " elements.";
  }
  return [el, descriptionText];
}
console.log(countAndDescribe("Hi There!"));

BREAK
The keyof Constraint
Telling TS that we want to ensure that we have a correct structure. Such as the example below, we have made sure that we don't call on a property(name) if it doesn't exist. Try removing the object in the extractAndConvert function and an error will occur.

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Award" }, "name");

BREAK
Generic Classes
Methods in classes can ALSO have generics.

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Award");
textStorage.addItem("Manu");
textStorage.removeItem("Award");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();

Above you'll see the class NOW only works with strings, numbers, and booleans aka primitive values.
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Award" });
objStorage.addItem({ name: "Larry" });
objStorage.removeItem({ name: "Larry" });

console.log(objStorage.getItems());


BREAK
Generic Utility Types:

1. The Partial utility tells TS that the arguments are optional.
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

The Readonly Ult: We're telling TS is that we cannot change the data within associated with the Readonly ult.

let namesToday: Readonly<string[]> = ["Award", "Dancing"];

namesToday = 33; And Example of trying to change namesToday.


export {};
