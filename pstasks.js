// Prime numbers 
// Even or odd numbers 
// Fibonacci series
// Addition of numbers using loop upto 10

// All these problems using
// For
// While
// Do while


// Even or odd numbers 

for (i=0;i<=10;i++){
    if(i%2==0){
        console.log("even",i)
    }

}

for (i=0;i<=10;i++){
    if(i%2!==0){
        console.log("odd",i)
    }
}


// let num=0

if(num%2==0){
    console.log("even number")
}
else {
    console.log("odd number")
}


// ====================================================================== 

// Prime numbers 

let num1 = 4

for (i = 2; i <= num1; i++) {

}


// =============================================================================== 

let a = 0
let b = 1

for (i = 0; i <= 10; i++) {
    // console.log(a) //0 1 1 2
    c = a + b  // 0+1=1 1+1=2 1+2=3
    a=b // 1 1 2
    b=c // 1 2 3

}

// ============================================================================== 

// Addition of numbers using loop upto 10
 

let add=0
for(i=1;i<=10;i++){
    add=add+i
}
console.log(add)

// ===========================================