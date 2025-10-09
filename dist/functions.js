"use strict";
function sum(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
function greet(name, role = "Guest") {
    console.log(`Hello ${name}, your role is ${role}`);
}
console.log("Tong:", sum(1, 2));
console.log("Tich:", multiply(3, 4));
greet("Hoang");
