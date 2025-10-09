"use strict";
let username = "HoangPC";
let age = 29;
let isActive = true;
let roles = ["admin", "user"];
let user = {
    name: "Phan Chính Hoàng",
    email: "phan.chinh.hoang@sun-asterisk.com",
    isAdmin: true
};
console.log(`User: ${user.name} (email: ${user.email}), Roles: ${roles.join(", ")}, Active: ${isActive}`);
function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Under 18");
    }
}
checkAge(age);
