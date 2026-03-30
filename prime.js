let num=10
prime=true
for(i=2;i<num;i++){
    if(num%i==0){
        prime=false
    }
}
if(prime===true){
    console.log("is prime")
}
else{
    console.log("if not prime ")
}