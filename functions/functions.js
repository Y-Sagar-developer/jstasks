// function declaration 
//function declaration is a way to define a named function using function keyword in js 
//so that you can call it later in your code 
//you can caal the function anywhere after or before its declared because of hoisting 
//it can tae parameter and return a value 

console.log(fun1("ravi"))

function fun1(name1) {
    return "my name is " + name1
}
console.log(fun1("sagar"))


// function fun2 (name2){
//     console.log("thi is "+name2)

// }
// fun2("sagar")

function fun3(a, b) {
    return a + b

}

console.log(fun3(10, 5))
console.log(fun3(5, 7))


function fun4(c) {
    if (c % 2 == 0) {
        return "even number"
    }
    else return "odd number"
}
console.log(fun4(5))


//function expression 
//a function expression is a way to define a function and assign in to a variable 
//in a function expression you can store a function inside a variable and you can call it using that variable name


const multiply = function (a1, b1) {
    return a1 * b1

}
console.log(multiply(5, 6))



const persantage = function (marks, total) {
    return ((marks / total) * 100).toFixed(2) + "%"
}
console.log(persantage(691, 1000))



const square = function (s) {
    return s * s

}

console.log([1, 2, 3].map(square))

//arrow function 
//an arrow is a short and modern way to write functions in javascript . it uses the => (arrow)
//symbol and it used for simple and quick tasks 

// const multiply1=n1=>n1*2
// console.log(multiply1(5))


const multiply1 = n1 => {
    return n1 * 5
}
console.log(multiply1(6))


const numarr = [1, 2, 4, 5, 7, 9]

const even1 = numarr.filter(
    n => n % 2 === 0
)
console.log(even1)


const power = (base, exp) => {
    return Math.pow(base, exp)
}
console.log(power(2, 10))


const student = (name2, marks2) => {
    return ({ name2, marks2, pass: marks2 >= 35 })
}

console.log(student('sagar', 34))

//higher oredr function 
//when a function accepts another function as a parameter then that accepting function is called asa 
//higher oreder function 


















//  Callback = పంపే function
//  Higher-order = తీసుకునే function
//call back function 


function adding(d,e){
    return d+e
}

function calcu(u,v,callbac){
    return callbac(u,v)
}

console.log(calcu(5,6,adding))





let ip1=prompt("enter a ip1 value")
