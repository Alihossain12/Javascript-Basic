// 🔹 Using var (function-scoped or global)
var username = "Ali";
console.log("Username (var):", username);

// 🔹 Using let (block-scoped)
let age = 22;
console.log("Age (let):", age);

// 🔹 Using const (cannot be reassigned)
const country = "Bangladesh";
console.log("Country (const):", country);

// 📌 JavaScript Data Types

// String
let name = "Hossain";
console.log("Type:", typeof name, "| Value:", name);

// Number
let score = 95.5;
console.log("Type:", typeof score, "| Value:", score);

// Boolean
let isAdmin = true;
console.log("Type:", typeof isAdmin, "| Value:", isAdmin);

// Undefined
let phone;
console.log("Type:", typeof phone, "| Value:", phone);

// Null (special case: typeof null === 'object')
let address = null;
console.log("Type:", typeof address, "| Value:", address);

// Object
let student = {
    id: 101,
    name: "Ali",
    passed: true
};
console.log("Type:", typeof student, "| Value:", student);

// Array (typeof returns object)
let colors = ["Red", "Green", "Blue"];
console.log("Type:", typeof colors, "| Value:", colors);

// Function
let greet = function() {
    return "Hello!";
};
console.log("Type:", typeof greet, "| Value:", greet());

// Symbol (unique identifiers)
let sym = Symbol("id");
console.log("Type:", typeof sym, "| Value:", sym.toString());

// BigInt (for very large numbers)
let bigNum = 1234567890123456789012345678901234567890n;
console.log("Type:", typeof bigNum, "| Value:", bigNum);