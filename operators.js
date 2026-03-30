// Arithmetic Operators
// these are used to performance mathmetical calculations 

var a=10;
var b=3;


// Addition
console.log(a+b)

// Subtraction
console.log(a-b)

// Multiplication
console.log(a*b)

// Division
console.log(a/b)

// Modulus
console.log(a%b)

// Exponent
console.log(2**3)

// ---------------------------------------------------------------------- 
// comparision operators
//used to compare two values and return a boolean true or false based on the condition 

// Equal
var x=10
var y="10"
console.log(typeof(x))
console.log(typeof(y))

console.log(x==y)//only chech values 

console.log(x===y)//check both value and data type 

// Not Equal
console.log(5!=10)
console.log(5!="5")

// Strict Not Equal
console.log(5!=="5")


// Greater Than
console.log(10>5)
console.log(10>15)

// Less Than
console.log(10<15)
console.log(10<8)

// Greater or Equal
console.log(5>=5)
console.log(6>=5)
console.log(6>=8)

// Less or Equal
console.log(13<=13)
console.log(14<=15)
console.log(14<=12)

// example 

let age=18
if(age>=18){
    console.log("you can vote ")
}

// ---------------------------------------------------------------------- 
//logical operators 
// logical operators are used to combine two or more conditions and return a true or false
// return based on the logic of the conditions

// AND operator
// return true only if both conditions are true

let num=10

console.log(num<11 && num>9)
console.log(num>=10 && num<=9)

// OR Operator 
//returns true only if atleast one statement is true
console.log(num<11 || num>9)
console.log(num>=10 || num<=9)
console.log(num>11 || num<=9)

// Not Operator
// reverses the result true becomes false and false becomes true 

let z= true 
console.log(z)
console.log(!z)

console.log(!(5>2))

// ----------------------------------------------------------------------------------- 

// Assignment operators 
// are used to assaign a values to varoiable and allowed modifies 


let num2=12

console.log(num2)

num2+=5
console.log(num2)

num2-=5
console.log(num2)

num2*=3
console.log(num2)

num2/=2
console.log(num2)

console.log("Apple"<"apple")