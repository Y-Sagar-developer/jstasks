
for (i = 16; i <= 25; i++) {
    if (i >= 18) {
        console.log(`${i} is eligible for driving licence `)
    }
    else {
        console.log(`${i} is not eligible `)
    }
}

// ========================================================================== 

// • Student Grading System – Loop through 10 student marks and assign grades (A, B, C, Fail).

let marks = [95, 82, 76, 25, 65, 54, 45, 35, 38, 89, 92, 57]

for (i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) {
        console.log("A")
    }
    else if (marks[i] >= 70) {
        console.log("B")
    }
    else if (marks[i] > 35) {
        console.log("C")
    }
    else {
        console.log("fail")
    }

}
// ============================ 
for (i = 0; i < marks.length; i++) {
    let gd;
    if (marks[i] >= 90) {
        gd = "A"
    }
    else if (marks[i] >= 70) {
        gd = "B"
    }
    else if (marks[i] >= 50) {
        gd = "c"
    }
    else {
        gd = "fail"
    }
    console.log("Student " + (i + 1) + ": Marks = " + marks[i] + " → Grade: " + gd);
}

// ========================================================================================================
// • Temperature Monitoring System – Check hourly temperature readings and print weather status.

let temparature = [15, 22, 30, 35, 40, 28, 18, 25];
for (i = 0; i < temparature.length; i++) {

    if (temparature[i] >= 35) {
        console.log("Hot");
    } else if (temparature[i] >= 25) {
        console.log("Warm");
    } else if (temparature[i] >= 15) {
        console.log("Cool");
    } else {
        console.log("Cold");
    }
}

// =====================t========================================================== 

let correc = 9550
let pins = [9550, 7013, 7671]

for (i = 0; i < pins.length; i++) {
    if (pins[i] === correc) {
        console.log("pin correct")
    }
    else {
        console.log("wrong pin")
    }
    if (i == 2) {
        console.log("many attemts")
    }
}


// =============================================================== 

// Traffic Signal Simulation – Repeat traffic signals 5 times: Red → Stop, Yellow → Ready, Green → Go.

for (i = 0; i < 5; i++) {
    console.log("Red → Stop")
    console.log("Yellow → Ready")
    console.log("Green → Go")
}



// =========================================================================== 

// Electricity Bill Units Check – Classify monthly units into Low, Medium, or High usage.
let units = [50, 120, 250, 80, 400, 160];
for (let i = 0; i < units.length; i++) {

    if (units[i] < 100) {
        console.log(`${units[i]} → low`);
    }
    else if (units[i] < 200) {
        console.log(`${units[i]} → medium`);
    }
    else {
        console.log(`${units[i]} → High`);
    }
}


// =============================================================== 
// Employee Attendance Tracker – Check 30 days attendance and count present and absent
// days.

let attendance = [
    "P", "A", "P", "P", "A", "P", "P", "P", "A", "P",
    "P", "P", "A", "P", "P", "P", "A", "P", "P", "A",
    "P", "P", "P", "A", "P", "P", "A", "P", "P", "P"
];

let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log(`present days ${present}`);
console.log(`absent days ${absent}`);



// ===========================================================================
// Rain Weather Alert System – Loop through 7 days rainfall values and print 'Heavy Rain Alert' if
// rain > 50mm.
let rainfallarr = [20, 55, 12, 80, 47, 60, 33];

for(i=0;i<=rainfallarr.length;i++){
    if(rainfallarr>=50){
        console.log("heavyrain alert")
    }
    else {
        console.log('normal')
    }
}





// ================================================================================== 
// Online Order Processing – Process 10 orders and print 'Processing Order #1… Order #10'.


for (let i = 1; i <= 10; i++) {
    console.log("Processing Order #" + i);
}


// ====================================================================================
// • Bus Seat Booking System – Loop through 10 seats and print 'Booked' or 'Available'.

let seats = ["B", "A", "A", "B", "A", "B", "A", "A", "B", "A"];

for (let i = 0; i < 10; i++) {

    if (seats[i] === "B") {
        console.log("Booked");
    } else {
        console.log("Available");
    }

}