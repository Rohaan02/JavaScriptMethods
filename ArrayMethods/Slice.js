// slice Example
// The original array remains unchanged.

let numbers = [1, 2, 3, 4];

//slice(index)
//to extract a portion of an array
console.log(numbers.slice(2)); //this will extract values from an array whose index is given
// Output: [2, 3, 4]

console.log(numbers.slice(1, 3)); //this will extract values from an array from (start,end) where start is included and end is excluded
// Output: [2, 3]

// when no index is passed than it will slice all elements from the array
let arr = [10, 20, 30, 40, 50];
console.log(arr.slice()); 
// Output: [10, 20, 30, 40, 50]

// Empty array's slice nothing because no entry in the array.
let a  = []
console.log(a.slice()); 