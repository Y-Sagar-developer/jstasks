let r = 5

for (i = 1; i <= r; i++) {
    num = 1
    s = ""
    for (j = 1; j <= i; j++) {
        s = s + num
        num++
    }
    console.log(s)
}



let stmarks = [45, 67, 89, 76, 55, 90, 34, 78, 88, 92,
    56, 73, 81, 60, 49, 99, 72, 85, 40, 68]

let sum = 0
for (i = 0; i < stmarks.length; i++) {
    sum = sum + stmarks[i]
}
console.log(sum)

//avg
let avg=sum/stmarks.length
console.log(avg)

// highest 
higmarks=stmarks[0]
for(i=1;i<stmarks.length;i++){
    if(stmarks[i]>higmarks){
        higmarks=stmarks[i]
    }
}

console.log(higmarks)

//low
let lowmarks = stmarks[0];
for ( i = 1; i < stmarks.length; i++) {
    if (stmarks[i] < lowmarks) {
        lowmarks = stmarks[i];
    }
}
console.log(lowmarks)
