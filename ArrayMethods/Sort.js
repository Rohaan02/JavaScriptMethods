//sort Example
//sort the array ascendingly
let recerse1 = [10, 2, 4, 15];
let recerse2 = ["R", "B", "C"];
console.log(recerse1.sort((a, b) => a - b)); //this is sort number if a-b = positive than a will come first & if negative than b will come first
// Output: [2, 4, 10, 15]

console.log(recerse2.sort()); //this will sort alphabetically
// Output: ["B", "C", "R"]