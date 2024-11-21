//Making Array
let arr = ["Rohaan", "Nadeem"];

//values
for (let value of arr.values()) {
  console.log(value);
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Example2
let obj = {a: 1, b: 2, c: 3};
for (let value of Object.values(obj)) {
  console.log(value);
}
// Output 
// 1
// 2
// 3

for (let value of Object.keys(obj)) {
  console.log(value);
}
// Output 
// a
// b
// c

for (let [key, value] of Object.entries(obj)) {
  console.log("element's key :", key,",", "element's key :", value);
}
// Output 
// a
// b
// c
