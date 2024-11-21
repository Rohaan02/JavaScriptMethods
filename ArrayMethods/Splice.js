// splice Example
// this can perform update, delete, add
// Alters the original array.

let numbers = [1, 2, 3, 4];

//splice(index,delete,values)              
console.log(numbers);
console.log(numbers.splice(0, 0, 6)); //this will add 6 at the 0 index and move all before values to next indexes.
console.log(numbers);
//[6, 1, 2, 3, 4]

console.log(numbers.splice(0, 1)); //this will delete 6 from the 0 index and move all before values to previous indexes.
console.log(numbers);
//[1, 2, 3, 4]

console.log(numbers.splice(1, 1, 6)); //this will update 1 value from index 1 and place 6.
console.log(numbers);
// [1, 6, 3, 4]