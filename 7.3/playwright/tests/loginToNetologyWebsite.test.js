const { describe } = require("node:test");
const { test, expect, chromium } = require("@playwright/test");
import { email, password } from "../user.js";

describe("Authorization on the netology website", () => {
  test("Successful authorization", async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 5000,
      devtools: true
    });  
    const page = await browser.newPage();   
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Пароль").fill(password);
    await page.getByTestId("login-submit-btn").click();      
    await expect(page).toHaveURL("https://netology.ru/profile/8810739");
      
  })();  
});

test("Unsuccessful authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  const error = await page.locator('[data-testid="login-error-hint"]');
  const email1 = "qwerty123@main.ru";
  const password1 = "qwerty890";
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(email1);
  await page.getByPlaceholder("Пароль").fill(password1);
  await page.getByTestId("login-submit-btn").click();    
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль"); 
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");    
});