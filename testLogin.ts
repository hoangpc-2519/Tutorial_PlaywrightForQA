import { LoginPage } from "./Pages/loginPage";
import { DashboardPage } from "./Pages/dashboardPage";

async function testLogin() {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  await loginPage.gotoLoginPage();
  await loginPage.login("admin", "123456");
  await dashboardPage.verifyLoginSuccess();
}
testLogin();