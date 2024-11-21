//lastIndexOf Example
//It searches the array backwards, starting from the end.

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
//["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//lastIndexOf
let lastIndexOf1 = fill2.lastIndexOf("Filled"); //Return the last index where value Filled comes
console.log(lastIndexOf1); // 1



////////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let fruits = ["Apple", "Banana", "Apple", "Orange"];

// Find the last index of "Apple"
console.log(fruits.lastIndexOf("Apple")); // 2

// Start searching backward from index 1
console.log(fruits.lastIndexOf("Apple", 1)); // 0

// Find the last index of "Banana"
console.log(fruits.lastIndexOf("Banana")); // 1

// Element not found
console.log(fruits.lastIndexOf("Mango")); // -1
