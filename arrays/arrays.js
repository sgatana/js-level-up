/* use strict */
// arrays 
const fruits = ['banana', 'apple']

console.log(fruits);

let count = 0;
let letFruit = fruits.splice(count, 1)
console.log('letf', letFruit)

// loop over an array
fruits.forEach((item, index, array) => {
  // count =+1;
  console.log({item}, index);
})