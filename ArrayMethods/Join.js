//join Example

//Making Array
let arr = ["Rohaan", "Nadeem"];

//join
// combines array elements using a comma as the default separator
let join1 = arr.join(); //return the arrays index values as value1,value2...
console.log(join1);
// "Rohaan,Nadeem"

let join2 = arr.join(" and "); //return the arrays index values as value1 and value2....
console.log(join2);
// "Rohaan and Nadeem"



////////////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.join("-"));       // "Apple-Banana-Orange" (hyphen as separator)
console.log(fruits.join("|"));       // "Apple|Banana|Orange" (pipe as separator)



////////////////////////////////////////////////////////////////////////////////////////////////////
////Example3
let emptyArray = [];
console.log(emptyArray.join());      // "" (empty string for an empty array)