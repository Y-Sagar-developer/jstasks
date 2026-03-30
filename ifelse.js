// Task :1
// temp > 35 --- ("Mode: Turbo Cool (Maximum power)"
// temp > 25----("Mode: Normal Cooling")
// (temp >= 20)----("Mode: Fan Only")
//  else---("Mode: Heating / Standby")

// Do by  using if,else,else if conditions(single program)


let temp = 1

if (temp > 35) {
    console.log("Mode: Turbo Cool (Maximum power)")
}
else if (temp > 25) {
    console.log("Mode: Normal Cooling")
}
else if (temp >= 20) {
    console.log("Mode: Fan Only")
}
else {
    console.log("Mode: Heating / Standby")
}


// Task-2(using Switch-statements)
// November, December, January, February ,March---print(It's Winter season.)
// July, August, September, October----print(It's Rainy season)
// April, May, June----print(It's Summer season)
// default: -----("unknown season)

let month = "August"

switch (month) {
    case "november":
    case "December":
    case "January":
    case "February":
    case "march":
        console.log("its a winter season")
        break;
    case "July":
    case "August":
    case "September":
    case "October":
        console.log("It's Rainy season")
        break;

    case "April":
    case "May":
    case "June":
        console.log("It's Summer season");
        break;
    default:
        console.log("Unknown season");

}