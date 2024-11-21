//defineProperty
//can add single property
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};
console.log(person);
Object.defineProperty(person, "age", { value: "28" }); // Add a new Property
console.log(person);
