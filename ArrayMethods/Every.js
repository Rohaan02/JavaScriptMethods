//every example


//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values

//Copy Value with Indexes
let copyIndexValue = concate1.copyWithin(2, 0); //copying the 0 index value in index 2

//every
let every2 = copyIndexValue.every(
  (copyIndexValue) => (copyIndexValue === "Rohaan")
); //check the if Rohaan is present in all indexes then return true otherwise false
console.log(every2); //false


// Making Array
let arr12 = [2, 4, 6, 8];
let arr22 = [10, 12, 14, 16];

// Concat arrays
let concate12 = arr12.concat(arr22); // [2, 4, 6, 8, 10, 12, 14, 16]

// every
let everyEven = concate12.every((value) => value % 2 === 0); // Check if all elements are even
console.log(everyEven); // Output: true
