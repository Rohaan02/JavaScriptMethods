//Making Array
let arr = ["Rohaan", "Nadeem"];
let arr2 = ["Shahmeer", "Nadeem"];

// ------------ Example1 ------------
let entries2 = arr.entries(); //makes key value pair
console.log(entries2);
for (let [index, value] of entries2) {
  console.log(index, value);
}
//or
for (let a of entries2) {
  console.log(a[0]);
  console.log(a[1]);
}

// ------------ Example2 ------------
let arr22 = [
  ["Rohaan", "Nadeem"],
  ["Shahmeer", "Nadeem"],
];
let arr23 = arr22.entries();
//  now this have the data:
// [
//     [0,['Rohaan','Nadeem']],
//     [1,['Shahmeer','Nadeem']]
// ]
for (let a of arr23) {
  console.log(a[1][0]); //Rohaan than Shahmeer
  console.log(a[1][1]); //Nadeem than Nadeem
}

// ------------ Example3 ------------
let arrObj = [
  { name: "Rohaan", age: 22 },
  { name: "Burhan", age: 23 },
];
let arrObjEn = arrObj.entries();
//  now this have the data:
// [
//     [0,{name: 'Rohaan', age: 22}],
//     [1,{name: 'Burhan', age: 23}]
// ]
for (let a of arrObjEn) {
  console.log("key:", Object.entries(a[1])); //[name,age]
  console.log("key:", Object.keys(a[1])); //[name,age]
  console.log("key:", Object.values(a[1])); //[Rohaan,22] & [Burhan,23]
  console.log('/////////////////////////'); //
}
