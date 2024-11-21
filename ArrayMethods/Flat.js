//flat example
let arr3 = [1, 2, [3, 4], [5]];
console.log(arr3.flat()); //this will make the sub arrays and the main array data in one array.
//[1, 2, 3, 4, 5]


////////////////////////////////////////////////////////////////////////////////////////
////Example2
let arr4 = [1, [2, [3, [4]]]];
console.log(arr4.flat(2)); // Flattening up to a depth of 2
//[1, 2, 3, [4]]


////////////////////////////////////////////////////////////////////////////////////////
////Example3
let arr5 = [1, [2, [3, [4]]]];
console.log(arr5.flat(3)); // Flattening up to a depth of 3
//[1, 2, 3, 4]