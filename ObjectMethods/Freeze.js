////Freeze
//Dont allow to add,update,delete

// // Example1
// // With ("use strict") it dont throw error
// "use strict";
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// Object.freeze(person);

// person.name = "Rohaan";


// Example2
//without "use strict"; 
//it dont throw error
const person = {
  firstName: "John",
  lastName: "Doe",
};
Object.freeze(person);

person.name = "Rohaan";