const { describe } = require("node:test");
const { chromium } = require("@playwright/test");
const { login, password } = require("C:/Users/welcome/Desktop/jsaqa-code/7.3/playwright/user.js");

describe("Authorization on the netology website", async () => {
    test("Successful authorization", async () => {
      const browser = await chromium.launch({
        headless: false,
        slowMo: 5000,
        devtools: true
      });
      const page = await browser.newPage();
      await page.goto("https://netology.ru/?modal=sign_in");
      enter (login, password).press("button"("Войти"));
      await expect(page).toHaveURL(
        "https://netology.ru/profile/8810739"
      );
    });
});        
