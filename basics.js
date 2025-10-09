var username = "HoangPC";
var age = 29;
var isActive = true;
var roles = ["admin", "user"];
var user = {
    name: "Phan Chính Hoàng",
    email: "phan.chinh.hoang@sun-asterisk.com",
    isAdmin: true
};
console.log("User: ".concat(user.name, " (email: ").concat(user.email, "), Roles: ").concat(roles.join(", "), ", Active: ").concat(isActive));
function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Under 18");
    }
}
checkAge(age);
