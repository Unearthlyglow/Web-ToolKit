Writing Clean and Modern JS (Section 17 - Chapter 280)

Functions:
1. Don't us more than 3 function parameters.
2. Use default parameters when possible.
3. Generally return the same data type as received.

OOP:
1. Use ES6 classes.
2. Encapsulate data and don't MUTATE it from outside the class.
3. Implement method chaining.
4. Do NOT use arrow functions as methods(in regular objects, YOU WILL NOT HAVE access to the THIS keyword)

BREAK
Avoid Nested Code:
1. Use early return(guard clauses)
2. Use ternary(conditional) or logical operators instead of if.
3. If you have to use if/else, use multiple IFS.
4. Avoid for loops and for of loops, use array methods instead.
5. Avoid callback-based asynchronous API.

BREAK
Asynchronous Code:
1. Consume promises with async/await for best readability.
2. Whenever possible, run promises in parallel(Promise.all).
3. Handle errors and promise rejections.

BREAK
Declarative and Functional JS Principals (Section 17 - Chapter 282)
1. Declarative programming paradigm.
2. Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data.
3. **A side effect: Modification(mutation) of any data outside of the function(mutating external variables, logging to the console, writing to DOM, etc).
4. Pure fuction: Function without side effects. Does not depend on external variables. Given the same inputs always returns the same outputs.
5. Immutability: State(data) is never modified! Instead state is copied and the copy is mutated and returned.
Functional Programming Techniques:
1. Try to avoid data mutations.
2. Use built-in methods that don't produce side effects.
3. DO data transformations with methods such as .map(), filter(), reduce().
4. Try to avoid side effects in functions this is of course not always possible.
Declarative Syntax:
1. Use Array and Object Destructuring when possible.
2. USe the spread operator(...).
3. Use the tenary(conditional) operator.
4. Use template literals.

BREAK
Which Data Structure To Use?

Sources of Data:
1. From the program itself: Data written directly in source code(e.g. status messages)

2. From the UI: Data Input from the user or data written in the DOM (e.g tasks in todo app).

3. From external sources: Data fetched for example from web API(e.g. recipe objects)

Collection of data is placed into DATA Structures.

BREAK
Simple Lists?: Array or Sets.
Key/Value Pairs Needed?: Objects or Maps.

Other Built-In (NOT IMPORTANT AT THIS TIME):
WeakMap, WeakSet...

Non-Built In(NOT IMPORTANT AT THIS TIME):
Stacks, Queues, Linked Lists, Trees, Hash Tables.

BREAK
Arrays Vs. Sets 

Arrays:
Use when you need ordered list of values(might contain duplicates).
Use when you need to manipulate data.

Sets: 
Use when you need to work with unique values. Use when high performance is really important. Use to remove duplicates from arrays. 

BREAK
Objects Vs. Maps 
Objects: More "traditional" key/value store ("abused" objects). Easier to write and access values with . and []. USE when you need to include functions(methods). USE when working with JSON(can convert to map)

Maps: Better performance. Keys can have ANY data type. Easy to iterate. Easy to compute size. USE when you simply need to map key to values. USE when you need keys that are NOT strings. 
