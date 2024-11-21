//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
console.log(concate1);



let arr1 = [1, 2, 3];
let result = arr1.concat(4, 5, [6, 7]);
console.log(result);



let arr12 = ["A"];
let emptyArray = [];
let result12 = arr12.concat(emptyArray, "B");
console.log(result12);
