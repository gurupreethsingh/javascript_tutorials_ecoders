// literals and data types in js. 
// 4 types of literals. 

//1. number literals - always printed without any single or double quotes. 
console.log(10);  // integers
console.log(2.34); // float or double
// identifying the datatypes of the literials. 
console.log(typeof(10)); // number
console.log(typeof(2.3)); // number

// charater literals 
console.log('a');
console.log(typeof('a')); // string

// string literals 
console.log("Hello world");
console.log(typeof("Hello world")); // string
console.log("abc123");
console.log(typeof("abc123")); // string
console.log("12345");
console.log(typeof("12345")); // string

// boolean literals (true, false)
console.log(true);
console.log(false);

// printing methods or cancatination 
console.log("The sum a and b is " + 30);
// concatination using comma
console.log("The sum a and b is ", 30);
// using back tick, $ symbol and {} brases
console.log(`The sum a and b is ${30}`);



// concatination and evaluation of numbers. 
const firstString = "2 + 2"; // Creates a string literal value
const secondString = new String("2 + 2"); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns a String object containing "2 + 2"


// strings in javascript . 

const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // This has no effect, because strings are immutable
hello[0]; // This returns "H"


// string related functions. 
/*
1 . charAt(), charCodeAt(), codePointAt()	Return the character or character code at the specified position in string.
2. indexOf(), lastIndexOf()	Return the position of specified substring in the string or last position of specified substring, respectively.

3. startsWith(), endsWith(), includes()	Returns whether or not the string starts, ends or contains a specified string.

4. concat()	Combines the text of two strings and returns a new string.

5. split()	Splits a String object into an array of strings by separating the string into substrings.

6. slice()	Extracts a section of a string and returns a new string.

7. substring(), substr()	Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.

8. match(), matchAll(), replace(), replaceAll(), search()	Work with regular expressions.

9. toLowerCase(), toUpperCase()	
Return the string in all lowercase or all uppercase, respectively.

10. normalize()	Returns the Unicode Normalization Form of the calling string value.

11. repeat()	Returns a string consisting of the elements of the object repeated the given times.

12. trim()  Trims whitespace from the beginning and end of the string.
*/



// how to write multi line strings. ( using \n , escape sequence)
console.log(
    "string text line 1\n\
  string text line 2",
  );

  
  // embedded or concatination. 
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);