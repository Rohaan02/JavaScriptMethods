//groupBy
//it makes a new object with the keys of the grouped values, and values

const fruit1 = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];
function groupFunc({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}
const result = Object.groupBy(fruit1, groupFunc);
console.log(result);
