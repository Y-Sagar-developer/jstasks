

// Topics Discussed on JavaScript Strings

// Basic Operations on JavaScript Strings
// 1. Finding the length of a String
// 2. String Concatenation
// 3. Escape Characters4.  Breaking Long Strings
// 5. Find Substring of a String
// 6. Convert String to Uppercase and Lowercase
// 7. String Search in JavaScript
// 8. String Replace in JavaScript
// 9. Trimming Whitespace from String
// 10. Access Characters from String
// 11. String Comparison in JavaScript
// 12. Passing JavaScript String as Objects



// JavaScript String Methods

// 1. slice()
// 2. substring()
// 3. substr()
// 4. replace()
// 5. replaceAll()
// 6. toUpperCase()
// 7. toLowerCase()
// 8. concat()
// 9. trim()
// 10. trimStart()
// 11. trimEnd()
// 12. padStart()
// 13. padEnd()
// 14. charAt()
// 15. split()
// 16. If u want extra knowledge u can learn this method also=charCodeAt()


// Write a code on each method and basic operations
// Develop code in different types as i have shown not it regular and basic coding

// Total I will get 27 programs 
// basic operations = 12 programs
// methods = 15 programs + 1 extra for charCodeAt()--(Optional)

// Your review time will be in between 5:00 to 5:30





// 1. String Length
let str="javascript"

console.log(str.length)

// 2. String Concatenation
let first="hello"
let second =" world"

let res=first+second
console.log(res)

// 3. Escape Characters

let txt="html stands for \"hyper text markup language\""
console.log(txt)

// Breaking Long Strings
let longtxt="HTML is the standard language" +
"used to create and structure web pages"
console.log(longtxt)



//  substring() ignores negative
//  slice() supports negative
// substring()

// is used to extract part of a string.
// End index NOT included 

let str2="javascript"

console.log(str2.substring(2,6))
let str2op=str2.substring(2,7)
console.log(str2op)

console.log(str.substring(-3)); 
console.log(str.slice(-3));    

// Negative values → treated as 0
console.log(str2.substring(-2,3))



// 1. slice()

// slice() is used to extract a part of a string and return it as a new string.

let str3="hypertext"
let str3op=str3.slice(0,5)
console.log(str3op)
console.log(str3.slice(0,5))
console.log(str3.slice(-5,-3))



// 3. substr()
//  substr() is used to extract part of a string, but the parameters are different from slice() and substring().
// start → starting index 
// length → how many characters to take (NOT ending index ❗)


let str4 = "JavaScript";
console.log(str4.substr(2, 4));


// replace()
// replace() is used to replace part of a string.

let txt2 = "I love Java";
let result = txt2.replace("Java", "JavaScript");
console.log(result);

//  replace() replaces ONLY FIRST occurrence

let text = "sagar sagar pavan";
console.log(text.replace("sagar", "karthik"));


console.log(text.replace(/sagar/g, "pavan"));

// replaceAll()
// Replaces ALL occurrences directly (no regex needed)

let text3 = "raju apple raju";
console.log(text3.replaceAll("raju", "mani"));




// toUpperCase()
// Converts all characters to CAPITAL letters

let str5 = "hello world";
console.log(str5.toUpperCase());

// toLowerCase()
// Converts all characters to small letters

let str6 = "HELLO WORLD";
console.log(str6.toLowerCase());



// concat()
// Joins two or more strings

let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));

let result2 = "I".concat(" ", "love", " ", "nodejs");
console.log(result2)

// trim()
// Removes spaces from both sides

let text4 = "   Hello World   ";
console.log(text4.trim());


// trimStart()
// Removes spaces from start only

let text5 = "   Hello";
console.log(text5.trimStart());


// trimEnd()
// Removes spaces from end only

let text6 = "Hello   ";
console.log(text6.trimEnd());


// padStart()
// Adds characters to the start (left side) of a string until it reaches a given length

// string.padStart(targetLength, padString)
// targetLength → final length
// padString → what to add

let num = "5";
console.log(num.padStart(3, "0"));

console.log("7".padStart(4, "*")); 

let num2 = "45";
console.log(num2.padStart(6, "0"));



// padEnd()
// Adds characters to the end (right side)
// string.padEnd(targetLength, padString)

let num4 = "5";
console.log(num4.padEnd(3, "0"));

let name = "Sagar";
console.log(name.padEnd(10, " "));



// split()
// Converts string → array

// string.split(separator)

let front = "HTML,CSS,JS";
console.log(front.split(","));

console.log("Hello World".split(" ")); 

console.log("abc".split("")); 


let txt6 = "I love JavaScript";
console.log(txt6.split(" ").length)



// Find Substring
// Check if part exists
let text7 = "I love JavaScript";
console.log(text7.includes("love"));



// String Search
// Find position

let str7 = "Frontend Developer";
console.log(str7.indexOf("Developer"));




// Access Characters

let word = "Developer";
console.log(word[0]);       // D
console.log(word.charAt(4)); // l

