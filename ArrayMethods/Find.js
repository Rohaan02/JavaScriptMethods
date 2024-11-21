//find examples

//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

//Concat arrays
let concate1 = arr.concat(arr2); //making new array concate1 which have both arrays values
// ["Rohaan", "Nadeem", "Shahmeer", "Nadeem"]


//fill (only update) and update the original array
let fill2 = concate1.fill("Filled", 0, 2); // this will update with Filled from 0 (included) to 2 (excluded)
// ["Filled", "Filled", "Shahmeer", "Nadeem"]


//find
//first Filled
let find2 = fill2.find((fill2) => fill2 === "Filled"); // this will return the first matched data (not in array)
console.log(find2); // "Filled"


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//// Example2
// Making an array with mixed objects
let users = [
    { id: 1, name: "Rohaan", age: 25 },
    { id: 2, name: "Nadeem", age: 30 },
    { id: 3, name: "Shahmeer", age: 20 },
    { id: 4, name: "Rohaan", age: 28 },
  ];
  
  // Find the first user named "Rohaan"
  let findUser = users.find((user) => user.name !== "Rohaan");
  console.log(findUser); // { id: 1, name: "Rohaan", age: 25 }
  
  // Find the first user older than 25
  let findOlder = users.find((user) => user.age > 25);
  console.log(findOlder); // { id: 2, name: "Nadeem", age: 30 }
  