// some Example
// (Dont change the orignal array)

let numbers = [1, 2, 3, 4];

//some(callback function)       
// return the boolean
let some1 = numbers.some((numbers) => numbers > 2); //this will check if the condition is okay than return true
console.log(some1);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Example2
let fruits = ["apple", "banana", "mango"];
let hasMango = fruits.some((fruit) => fruit === "mango");
console.log(hasMango); 
// Output: true
