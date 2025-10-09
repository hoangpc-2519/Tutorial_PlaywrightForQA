"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("./Pages/loginPage");
const dashboardPage_1 = require("./Pages/dashboardPage");
async function testLogin() {
    const loginPage = new loginPage_1.LoginPage();
    const dashboardPage = new dashboardPage_1.DashboardPage();
    await loginPage.gotoLoginPage();
    await loginPage.login("admin", "123456");
    await dashboardPage.verifyLoginSuccess();
}
testLogin();
