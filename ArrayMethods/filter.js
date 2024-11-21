//filter examples
//makes new array

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//filter
let filter2 = fill2.filter((fill2) => fill2 === "Filled"); // this will filter the data in new array also return duplicate values
console.log(filter2);
// ["Filled", "Filled"]





//// Example2
// Making an array with mixed types
let mixedArray = [42, "Rohaan", null, "Filled", "Nadeem", 42, "Filled", undefined];

// Filter only numeric values
let numericValues = mixedArray.filter((value) => typeof value === "number");
console.log(numericValues); // [42, 42]

// Filter unique "Filled" values
let filledValues = mixedArray.filter((value) => value === "Filled");
console.log(filledValues); // ["Filled", "Filled"]

// Filter non-null and non-undefined values
let validValues = mixedArray.filter((value) => value !== null); //skips 2,7 index
console.log(validValues); // [42, "Rohaan", "Filled", "Nadeem", 42, "Filled"]