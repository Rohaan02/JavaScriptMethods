// findLastIndex Example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//findLastIndex
// Find the index of the last "Filled"
let findLastIndex2 = fill2.findLastIndex((fill2) => fill2 === "Filled"); // this will return the Last matched data's index number (not in array)
console.log(findLastIndex2); // 1

//findLastIndex
// Find the index of the last "Filled"
let findLastIndex12 = fill2.findLastIndex((fill2) => fill2 === "Ali"); // this will return the Last matched data's index number (not in array)
console.log(findLastIndex12); // -1
