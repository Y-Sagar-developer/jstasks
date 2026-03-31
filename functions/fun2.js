// IIFE (Immediately Invoked Function)

(function () {
    console.log("I run immediately");
})();


// Constructor Function

function Person(name) {
  this.name = name;
}

const p1 = new Person("Ravi");
console.log(p1.name);

// Async Function
async function greet() {
  return "Hello";
}

greet().then(res => console.log(res));


//pure function

function add(a, b) {
  return a + b;
}
console.log(add(2,3));

//rest para fun
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1,2,3,4));