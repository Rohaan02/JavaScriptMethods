//from()
let text = "Rohaan";
console.log(Array.from(text)); //this will make the string characters in different indexes of an array.
//// Output
//['R', 'o', 'h', 'a', 'a', 'n']


///////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let upperCaseArray = Array.from(text, char => char.toUpperCase());
console.log(upperCaseArray); 
//// Output
// ['R', 'O', 'H', 'A', 'A', 'N']


///////////////////////////////////////////////////////////////////////////////////////////////
////Example3
let arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
let arr = Array.from(arrayLikeObject);
console.log(arr); 
//// Output
// ['a', 'b', 'c']
