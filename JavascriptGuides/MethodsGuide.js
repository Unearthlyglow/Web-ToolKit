Array Methods: ------------------------------------------------
BREAK
splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

const numbers = ['One', 'Two', 'Three', 'Four'];
numbers.splice(4, 0, 'Five');

Remove 0 elements before index 4 and insert "Five"
console.log(numbers);
expected output: Array ['One', 'Two', 'Three', 'Four', 'Five'];

BREAK
concat(): 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
expected output: Array ["a", "b", "c", "d", "e", "f"]

BREAK
indexOf(): 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
expected output: 1

BREAK
join(): Combine elements of an array into a single string and return the string.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
expected output: "Fire,Air,Water"

console.log(elements.join(''));
expected output: "FireAirWater"

BREAK
lastIndexOf(): returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
expected output: 3

BREAK
pop(): removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
expected output: "tomato"

BREAK
push(): adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

console.log();
BREAK
reverse(): reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const array1 = ['one', 'two', 'three'];
const reversed = array1.reverse();
console.log('reversed:', reversed);
expected output: "reversed:" Array ["three", "two", "one"]

BREAK
shift(): removes the first element from an array and returns that removed element. This method changes the length of the array.

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

BREAK
slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

BREAK
sort(): sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

BREAK
toString(): Converts elements to strings.

BREAK
unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]



Math Methods: ------------------------------------------------

BREAK
1. The Math.min() method is used to find the lowest value in a list of arguments.

BREAK
2. The Math.max() method is used to find the highest value in a list of arguments. 

BREAK
3. The Math.round(x) method returns the value of a number x rounded to its nearest integer.

BREAK
4. The Math.floor(x) returns the value of x rounded down to its nearest integer.

BREAK
6. The Math.ceil(x) returns the value of x rounded up to its nearest integer.

BREAK
5. The Math.random() returns a random number between 0 and 1. It’s often used to extract random elements from an array.

JS String Methods------------------------------------------------
toUpperCase(): Capitalizes entire string.

toLowerCase(): Lower cases entire string.

trim(): Removing white space of a string. 

replace(): Replaces strings with new values:
console.log(str.replace(str1, str2));

.slice(): extracts a section of a string and returns it as a new string, without modifying the original string.

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
expected output: "dog."

.split(): divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

.repeat(): method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

.match(): retrieves the result of matching a string against a regular expression.

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

.charAt(): returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index index is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

.concat(): concatenates the string arguments to the calling string and returns a new string.
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
expected output: "Hello World"

.search(): executes a search for a match between a regular expression and this String object.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

.substring(): returns the part of the string between the start and end indexes, or to the end of the string.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

.valueOf(): returns the primitive value of a String object.

const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"

.startsWith(): determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false

.endsWith(): determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false

.lastIndexOf(): given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "searchTerm" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"




