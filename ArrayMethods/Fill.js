//Fill Example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values

//fill (only update) and update the original array
let fill1 = arr.fill("Filled"); // this will update all entries with Filled
console.log(fill1); // Output ["Filled", "Filled"]


let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
console.log(fill2); //Output ["Filled", "Filled", "Shahmeer", "Nadeem"]



// Create an array with empty slots
let arr12 = new Array(5);
console.log(arr12); //[ <5 empty items> ]

// Fill the array with a repeating pattern
let fillPattern = arr12.fill("Pattern", 1, 4); // Fills from index 1 to 3
console.log(fillPattern); // [empty, "Pattern", "Pattern", "Pattern", empty]