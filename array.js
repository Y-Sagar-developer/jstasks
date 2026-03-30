// let inventory = ["  apple  ", ["orange", "peach"], "banana", "kiwi", "mango"];

// JavaScript Array Methods
//     ------------------------
//     1. JavaScript Array length 
//     2. JavaScript Array toString() Method
//     3. JavaScript Array join() Method
//     4. JavaScript Array delete Operator
//     5. JavaScript Array concat() Method
//     6. JavaScript Array flat() Method
//     7. JavaScript Array.push() Method
//     8. JavaScript Array.unshift() Method
//     9. JavaScript Array.pop() Method
//     10. JavaScript Array.shift() Method
//     13. JavaScript Array some() Method
//     14. JavaScript Array map() Method
//     15. JavaScript Array filter() method
//     16. JavaScript Array reduce() Method
//     17. JavaScript Array reverse() method
//     18. JavaScript Array values() method

let inventory = ["  apple  ", ["orange", "peach"], "banana", "kiwi", "mango"];
let fruits = ["grapes", "sapota"]
console.log(inventory.length)
console.log(inventory.toString())

console.log(inventory.join("-"))

delete inventory[1];
console.log(inventory)


console.log(inventory.concat(fruits))


let flatarray = inventory.flat()
console.log(flatarray)

console.log(inventory.push("blackberry"))
console.log(inventory)

inventory.unshift("melon")
console.log(inventory)

inventory.pop()
console.log(inventory)


console.log(inventory.shift())
console.log(inventory)

let sum = inventory.some(item => item === "banana")
console.log(sum)


let upper = inventory.map(item => item.toString().toUpperCase());
console.log(upper);

let filtered = inventory.filter(item => item === "mango");
console.log(filtered);

console.log(inventory.reverse());



// 16. JavaScript Array reduce() Method
// 18. JavaScript Array values() method

