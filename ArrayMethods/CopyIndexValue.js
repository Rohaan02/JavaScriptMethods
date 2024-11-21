//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values

//Copy Value with Indexes
let copyIndexValue = concate1.copyWithin(2, 0); //copying the 0 index value in index 2
console.log(copyIndexValue);


let copyIndexValue1 = concate1.copyWithin(2, 1, 4); // copying the 1 index value in index 2 to 4 (non-inclusive)
console.log(copyIndexValue);