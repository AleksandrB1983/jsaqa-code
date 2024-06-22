const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://netology.ru${string}`, {
    setTimeout: 20000,
  });
}, 20000);

When("user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});

Given('user is on second {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'await page.goto("https://qamid.tmweb.ru/client/index.php")';
});

When('user click by button', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'await clickElement(page, "[class=acceptin-button]")';
});

Then('user sees title {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'await getText(page, "h2[class=ticket__check-title]");';
});