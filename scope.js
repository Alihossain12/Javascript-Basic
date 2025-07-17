// // Global scope - access anywhere (inside block or function scope)
// const name = "My name is ali hossain";

// if (true) {
//     // only const and let will work for block scope but var will not work
//     const age = 24; // Block scope
//     var var_inside_block = "var inside block"; // this will work like a global scope
//     console.log(name);
// }

// function ali() {
//     // var, let,const can be access inside function
//     // Function scope
//     let height = 5.4 // Function scope
//     var var_inside_function = "var inside function"; // this will work inside this function

//     console.log(name);
//     // End function scope
// }

// console.log(var_inside_function);
// console.log(var_inside_block);
// console.log(age);
// console.log(height);


// // ali();



// New code------------------------------

//  Global Scope
const name = "My name is Ali Hossain";
console.log(`Global Scope: ${name}`);

//  Block Scope
if (true) {
    const age = 22; // Block-scoped
    let city = "Dhaka"; // Block-scoped
    var var_inside_block = "This var is inside a block"; // NOT block-scoped

    console.log(`Inside block - Name: ${name}`);
    console.log(`Inside block - Age: ${age}`);
    console.log(`Inside block - City: ${city}`);
    console.log(`Inside block - var: ${var_inside_block}`);
}

//  Function Scope
function ali() {
    let height = 5.8; // Function-scoped
    var weight = 60;  // Function-scoped

    console.log("Inside ali() function:");
    console.log(`Name (global): ${name}`);
    console.log(`Height: ${height}`);
    console.log(`Weight: ${weight}`);
}

ali(); // Call the function

// ❌ Accessing out-of-scope variables
console.log("\nAttempting to access variables outside their scopes:");

try {
    console.log(age); // Block-scoped, will throw ReferenceError
} catch (e) {
    console.warn("❌ 'age' is not accessible outside the block.");
}

try {
    console.log(city); // Block-scoped, will throw ReferenceError
} catch (e) {
    console.warn("❌ 'city' is not accessible outside the block.");
}

try {
    console.log(height); // Function-scoped, will throw ReferenceError
} catch (e) {
    console.warn("❌ 'height' is not accessible outside the function.");
}

try {
    console.log(weight); // Function-scoped, will throw ReferenceError
} catch (e) {
    console.warn("❌ 'weight' is not accessible outside the function.");
}

//  This will work because var is not block-scoped
console.log(`✅ 'var_inside_block': ${var_inside_block}`);
