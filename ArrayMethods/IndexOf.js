//indexOf Example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]

//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]

//indexOf
let indexOf = fill2.indexOf("Filled"); //this will return indexOf Filled start check from the left to right and when match stop and return the index
console.log(indexOf);
// 0

let indexOf2 = fill2.indexOf("Filled", 1); //this will return indexOf Filled start check from index 1 and when match stop and return the index
console.log(indexOf2);
//1


///////////////////////////////////////////////////////////////////////////////////////////
////Example2
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Grapes")); 
// -1 (Grapes is not in the array)

