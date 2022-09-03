Interfaces:
Describes the structure of an object. Not as a blueprint but rather a custom type.
custom types are more freeing. 

1. interfaces are clearer and are seen more in code than custom Types.
2. Interfaces can be implemented into a class.
3. You can implement multiple interfaces.
4. Interfaces help enforce structure.
5. You can also have inheritance with your interfaces. The reason to extend is that on some objects you'll need certain properties and others not. You can of course extend multiple interfaces.

6.** There is no compilation for Interfaces, this is a pure development feature part of TS.

interface Named {
  readonly name?: string;
  outputName?: string; !The question mark means this is optional. You can also mark methods as optional!
}

interface Greetable extends Named {
  greet(phrase: string): void;
  peaches?(food: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 20;

  constructor(n: string = "No Name Found?!") {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("HI!");
    }
  }
}

let u1: Greetable;

u1 = new Person("Award");
u1.name = "New Name WONT WORK because it is READONLY"; Line 12
u1.greet("Hi There - I am");

BREAK
Interfaces as Function Types:
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

You can also do the same above with a custom type. Custom types in this case are used more common and may be shorter code. 
type Addfn2 = (a: number, b: number) => number;

let add2: Addfn2;


