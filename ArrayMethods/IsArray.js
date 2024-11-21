//isArray Example

//Making Array
let arr = ["Rohaan", "Nadeem"];
let text = "Rohaan";

//isArray
// checks if "text" is an array
let isArray = Array.isArray(text); //this will return boolean if is array than true
console.log(isArray); //false

// checks if "arr" is an array
let isArray2 = Array.isArray(arr); //this will return boolean if is array than true
console.log(isArray2); //true


//////////////////////////////////////////////////////////////////////////////////////////
////Example2
console.log(Array.isArray([1, 2, 3])); // true (array)
console.log(Array.isArray("Hello"));  // false (string)
console.log(Array.isArray({ key: "value" })); // false (object)
console.log(Array.isArray(null));    // false (null)
console.log(Array.isArray(undefined)); // false (undefined)
console.log(Array.isArray(new Array())); // true (array created with constructor)
