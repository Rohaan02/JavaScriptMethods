//forEach (return nothing)
//used for the side Effects only
let numbers = [1, 2, 3, 4];
numbers.forEach( a => {
  console.log(`'Hi', Value: ${a}`); //this is the call back function to return the index and their values
});
//// Output
// 'Hi', Value: 1
// 'Hi', Value: 2
// 'Hi', Value: 3
// 'Hi', Value: 4


////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let numbers2 = [1, 2, 3, 4];
numbers2.forEach((a, index, array) => {
  console.log(`Index: ${index}, Value: ${a}, Array: ${array}`);
});
//// Output
// Index: 0, Value: 1, Array: [1, 2, 3, 4]
// Index: 1, Value: 2, Array: [1, 2, 3, 4]
// Index: 2, Value: 3, Array: [1, 2, 3, 4]
// Index: 3, Value: 4, Array: [1, 2, 3, 4]

