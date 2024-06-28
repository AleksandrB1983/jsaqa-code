const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, setDefaultTimeout } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

setDefaultTimeout(60000);
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
    setTimeout: 40000,
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

Given("user is on second {string} page", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 40000,
  });
    
});

When("user click by button first", async function () {
  // Write code here that turns the phrase above into concrete actions
  await clickElement(this.page, "[class='page-nav__day ']" );
  await clickElement(this.page, "[class='movie-seances__time']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  return await clickElement(this.page, "[class='acceptin-button']");
});

Then("user sees title first {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions  
  const actual = await getText(this.page, "h2[class='ticket__check-title']");
  const expected = await string;
  expect(actual).contain(expected);
});

Given("user is on third {string} page", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 40000,
  });
    
});

When("user click by button second", async function () {
  // Write code here that turns the phrase above into concrete actions
  await clickElement(this.page, "[class='page-nav__day ']" );
  await clickElement(this.page, "[class='movie-seances__time']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
  return await clickElement(this.page, "[class='acceptin-button']");
});

Then("user sees title second {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions  
  const actual = await getText(this.page, "h2[class='ticket__check-title']");
  const expected = await string;
  expect(actual).contain(expected);
});

Given("user is on fourth {string} page", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 40000,
  });
    
});

When("user click by button third", async function () {
  // Write code here that turns the phrase above into concrete actions
  await clickElement(this.page, "[class='page-nav__day ']" );
  await clickElement(this.page, "[class='movie-seances__time']");
  return await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken']"); 
});