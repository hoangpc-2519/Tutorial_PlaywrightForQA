function sum(a, b) {
    return a + b;
}
var multiply = function (a, b) { return a * b; };
function greet(name, role) {
    if (role === void 0) { role = "Guest"; }
    console.log("Hello ".concat(name, ", your role is ").concat(role));
}
console.log("Tong:", sum(1, 2));
console.log("Tich:", multiply(3, 4));
greet("Hoang");
