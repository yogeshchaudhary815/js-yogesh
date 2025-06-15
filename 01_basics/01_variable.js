const myName = "yogesh chaudhary"
console.log(myName);
const myAge = 22;
let className = "9th";
// before overwriting
console.table({ myName, myAge, className });
// value after overwriting
className = "10th";
// const variables cannot be reassigned, but let variables can be changed
// myAge = 23;
console.table({ myName, myAge, className });

