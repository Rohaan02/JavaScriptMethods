//// Reduce Example
//method executes a callback function on each element of the array, 
//resulting in a single output value.
//(Dont change the orignal array)     
//start from left to right

let numbers = [1, 2, 3, 4];

//returns a single value
let sum = numbers.reduce(getSum, 0);
// Initial value: 0
// Process:
// total = 0, num = 1 ==> total = 1
// total = 1, num = 2 ==> total = 3
// total = 3, num = 3 ==> total = 6
// total = 6, num = 4 ==> total = 10
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(sum); // Output: 10



///////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let words = ["Hello", "this", "is", "Rohaan", "here"];
let sentence = words.reduce((totalString, currentValue) => {
  return totalString + " " + currentValue;
}, "");
// Initial value: "" (empty string)
// Process:
// totalString = "", currentValue = "Hello" ==> " Hello"
// totalString = " Hello", currentValue = "this" ==> " Hello this"
// totalString = " Hello this", currentValue = "is" ==> " Hello this is"
// totalString = " Hello this is", currentValue = "Rohaan" ==> " Hello this is Rohaan"
// totalString = " Hello this is Rohaan", currentValue = "here" ==> " Hello this is Rohaan here"

console.log(sentence);
// Output: " Hello this is Rohaan here"