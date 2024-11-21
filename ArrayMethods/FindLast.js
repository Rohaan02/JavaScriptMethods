//findLast example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//findLast
// Find the last "Filled"
let findLast2 = fill2.findLast((fill2) => fill2 === "Filled"); // this will return the Last matched data (not in array)
console.log(findLast2);
// "Filled"


////////////////////////////////////////////////////////////////////////////////////////////////
////Example2
// Making an array with mixed objects
let users = [
    { id: 1, name: "Rohaan", age: 25 },
    { id: 2, name: "Nadeem", age: 30 },
    { id: 3, name: "Shahmeer", age: 20 },
    { id: 4, name: "Rohaan", age: 28 },
  ];
  
  // Find the last user named "Rohaan"
  let findLastUser = users.findLast((user) => user.name === "Rohaan");
  console.log(findLastUser); // { id: 4, name: "Rohaan", age: 28 }
  
  // Find the last user older than 25
  let findLastOlder = users.findLast((user) => user.age > 25);
  console.log(findLastOlder); // { id: 4, name: "Rohaan", age: 28 }
  
