"use strict";
function sum(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
function greet(name, role = "Guest") {
    console.log(`Hello ${name}, your role is ${role}`);
}
async function delayPrint(msg, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, time);
    });
}
