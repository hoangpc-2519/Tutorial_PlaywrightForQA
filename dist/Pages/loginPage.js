"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    async gotoLoginPage() {
        console.log("Loading page");
    }
    async login(username, password) {
        console.log(`Login: ${username}, password: ${password}`);
    }
}
exports.LoginPage = LoginPage;
