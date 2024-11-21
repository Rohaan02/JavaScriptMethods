//// DefineProperties Example
// This is not enumerable by default 
// property isn't set to be enumerable

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};
console.log(person);

//defineProperties
//can add multiple properties
Object.defineProperties(person, {
  year: { value: "Hello" }, // Added a new Property
  language: { value: "en" }, // Added a new Property  (as it was already in person this will update the value)
});
console.log(person);
//// Output
//{ firstName: 'John', lastName: 'Doe', language: 'EN' }
// { firstName: 'John', lastName: 'Doe', language: 'en' }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Example2
// enumerable: true  (which will allow that property to show in the log, loop)
Object.defineProperties(person, {
  age: { value: 22, enumerable: true },// Added a new Property
  city: { value: "Lahore", enumerable: true }// Added a new Property  (as it was already in person this will update the value)
});
console.log(person);