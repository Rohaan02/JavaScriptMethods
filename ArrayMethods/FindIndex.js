//findIndex example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//findIndex
// Find the index of the first "Filled"
let findIndex2 = fill2.findIndex((fill2) => fill2 === "Filled"); // this will return the first matched data's index number (not in array)
console.log(findIndex2); //0

//findIndex
// Find the index of the first "Filled"
let findIndex12 = fill2.findIndex((fill2) => fill2 === "Bukaqi"); // this will return the first matched data's index number (not in array)
console.log(findIndex12); //-1
