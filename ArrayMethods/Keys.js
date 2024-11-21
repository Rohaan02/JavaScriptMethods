//keys Example

//Making Array
let arr = ["Rohaan", "Nadeem"];

//keys
for (let keys of arr.keys()) {
  console.log(keys);
}
//Output
//0
//1


/////////////////////////////////////////////////////////////////////////////////////////////
// Example2
let fruits = ["Apple", "Banana", "Orange"];

// Creating an array of indices from keys()
let indices = [...fruits.keys()];
console.log(indices); 
// [0, 1, 2]
