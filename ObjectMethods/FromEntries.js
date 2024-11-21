//convert the Array into object(entries(key,value pair)).

//fromEntries
const fruits2 = [
  ["apple", 1],
  ["banana", 2],
  ["cherry", 3],
];

////////////////////////////////////////////////////////////////////////////////////////
//// Example 2
// const fruits2 = [
//   [["apple", 1],["apple", 1]],
//   ["banana", 2],
//   ["cherry", 3],
// ];
console.log("Fruits before: ", fruits2);
const fruits3 = Object.fromEntries(fruits2);
console.log("Fruits after: ", fruits3);

//Output 1
// Fruits before:  [ [ 'apple', 1 ], [ 'banana', 2 ], [ 'cherry', 3 ] ]
// Fruits after:  { apple: 1, banana: 2, cherry: 3 }

//Output 2
// Fruits before:  [
//   [ [ 'apple', 1 ], [ 'apple', 1 ] ],
//   [ 'banana', 2 ],
//   [ 'cherry', 3 ]
// ]
// Fruits after:  { 'apple,1': [ 'apple', 1 ], banana: 2, cherry: 3 }
