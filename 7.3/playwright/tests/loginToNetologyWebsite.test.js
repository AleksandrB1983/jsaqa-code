const { describe } = require("node:test");
const { test, expect, chromium } = require("@playwright/test");
const { email, password } = require("C:/Users/welcome/Desktop/jsaqa-code/7.3/playwright/user.js");

describe("Authorization on the netology website", () => {
  test("Successful authorization", async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 5000,
      devtools: true
    });  
    const page = await browser.newPage("https://netology.ru/?modal=sign_in");   
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForURL("https://netology.ru/");   
    await expect(page.getByRole("button", { name: "https://netology.ru/profile/8810739" })).toBeVisible();  
  })();  
  
  test("Unsuccessful authorization", async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 5000,
      devtools: true
    });
    const page = await browser.newPage("https://netology.ru/?modal=sign_in");
    const email1 = "qwerty123@main.ru";
    const password1 = "qwerty890";
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.getByLabel(input("Email")).fill(email1);
    await page.getByLabel(input("Password")).fill(password1);
    await page.getByRole("button", { name: "Sign in" }).click();    
    await expect(page.getByRole("button", { name: "https://netology.ru/?modal=sign_in" })).toBeVisible();        
  })();
});
