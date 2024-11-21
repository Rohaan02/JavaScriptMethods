// reduceRight Examples

let numbers = [1, 2, 3, 4];

//reduceRight (Dont change the orignal array)     start from right to left
//returns a single value
let sum1 = numbers.reduceRight(getSum, 0);
// Initial value: 0
// Process:
// total = 0, num = 4 → total = 4
// total = 4, num = 3 → total = 7
// total = 7, num = 2 → total = 9
// total = 9, num = 1 → total = 10

function getSum(total, num) {
  return total + Math.round(num);
}
console.log(sum1); // Output: 10



///////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let words1 = ["Hello", "this", "is", "Rohaan", "here"];
let sentence1 = words1.reduceRight((totalString, currentValue) => {
  return totalString + " " + currentValue;
}, "");
// Initial value: "" (empty string)
// Process:
// totalString = "", currentValue = "here" → " here"
// totalString = " here", currentValue = "Rohaan" → " here Rohaan"
// totalString = " here Rohaan", currentValue = "is" → " here Rohaan is"
// totalString = " here Rohaan is", currentValue = "this" → " here Rohaan is this"
// totalString = " here Rohaan is this", currentValue = "Hello" → " here Rohaan is this Hello"

console.log(sentence1); // Output: " here Rohaan is this Hello"
