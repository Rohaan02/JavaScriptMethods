//isExtensible
// if preventExtensions this will restrict from adding only

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};

console.log("Person Before :", person);

//isExtensible
//this will return boolean
Object.preventExtensions(person); //this will not allow to extense
let answer = Object.isExtensible(person);

console.log(answer);
