// loops.js - Example 1: Using a for loop

console.log(" Example 1: For loop - Print numbers 1 to 5");

for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}


// loops.js - Example 2: Using forEach to loop over array elements

console.log("\n Example 2: forEach loop - List fruits");

const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach(function(fruit, index) {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});
