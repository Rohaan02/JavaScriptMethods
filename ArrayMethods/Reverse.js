// reverse() Example
// (overwrites original array)
//Making Array
let arr = ["Rohaan", "Nadeem"];

console.log(arr.reverse()); //this reverse the order
// Output: "naahoR"


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Example2
let nested = [[1, 2], [3, 4], [5, 6]];
let reversedNested = nested.map(subArray => subArray.reverse()).reverse();
// First, each sub-array is reversed.
// Then, the entire array is reversed.
console.log(reversedNested); 
// Output: [[6, 5], [4, 3], [2, 1]]