//includes Example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//includes (return boolean)
let includes = fill2.includes("Filled"); //this will check if "Filled" is present in the array
console.log(includes);
// true

let includes2 = fill2.includes("Filled", 0); //this will check if "Filled" is present in the array from the index 0 (included) if yes then return true
console.log(includes2);
// true

let includes3 = fill2.includes("Bukaqi", 0); //this will check if "Filled" is present in the array from the index 0 (included) if yes then return true
console.log(includes3);
// false