var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
    User.prototype.getInfo = function () {
        return "User: ".concat(this.name, ", Email: ").concat(this.email, ", Admin: ").concat(this.isAdmin);
    };
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(name, email) {
        return _super.call(this, name, email, true) || this;
    }
    return AdminUser;
}(User));
var users = [
    new User("Hoang1", "phan.chinh.hoang@sun-asterisk.com", false),
    new User("Hoang2", "phan.chinh.hoang2@sun-asterisk.com", false),
    new AdminUser("Hoang3", "phan.chinh.hoang3@sun-asterisk.com"),
    new AdminUser("Hoang4", "phan.chinh.hoang4@sun-asterisk.com"),
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var u = users_1[_i];
    console.log(u.getInfo());
}
