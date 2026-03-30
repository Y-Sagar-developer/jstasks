
const age = 17

const res = age >= 18 ? "adult" : "minar"
console.log(res)


const light = "yellow"

const op =
    light === "red" ? "stop" :
        light === "yellow" ? "ready to move" :
            light === "green" ? "Go" :
                "invalid input"
console.log(op)


const temperature = 0;

const tempres =
    temperature === 0 ? "its freezing cold" :
        temperature === 15 ? "cool day" :
            temperature === 25 ? "its a pleasent day" :
                "unknown weather"

console.log(tempres)

// =========================================================================================== 

// f. JavaScript Comma Operator
// Syntax:  let result = (expr1, expr2, expr3);


const coma = (15, 17, 18)
console.log(coma)

let comma1 = 15;
let comma1res = (comma1 = comma1 + 2, comma1 * 2);

console.log(comma1res)

let comma3 = (a = 10, b = 19, a + b)
console.log(comma3)


// ----------------------------------------------------------------------------------------------- 
// delete operator 

let user = {
    name: "sagar",
    age: 24
}
delete user.age;

console.log(user)


let obj = {
    a: 1,
    b: 2
}

console.log(delete obj.a)
console.log(obj)

// ------------------------------------------------------------------------------------------- 

// Unary Plus 

let num1 = "10"
let num1res = +num1
console.log(num1res)
console.log(typeof (num1res))

let num2 = 10
let num2res = +num2
console.log(typeof (num2res))

// Unary Minus

let num3 = 10
let num3res = -num3
console.log(num3res)

// Pre-increment 

let num4 = 15
let num4res = ++num4

console.log(num4)
console.log(num4res)

// post-increment

let num5 = 17
let num5res = num5++
console.log(num5res)

console.log(num5)

// --------------------------------------------------------------

// String Operators

let firstName = "yarra"
let lastName = "sagar"
let fullName = firstName + " " + lastName
console.log(fullName)


let day="good"
day+=" morning"
console.log(day)


// h.void Operator



// let d = void(1 + 2);

// console.log(d);



// l.JavaScript Chaining Operator (?.)-------optional If you have time u can try these advanced programming concept(but it is important guys)
// obj?.prop
// obj?.[expr]
// obj.method?.()
// array?.[index] 
