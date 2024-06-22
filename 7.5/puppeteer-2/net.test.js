const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000);
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://netology.ru");
  });

  test("The first test'", async () => {
    const title = await page.title();
    console.log("Page title: " + title);
    await clickElement(page, "header a + a");
    const title2 = await page.title();
    console.log("Page title: " + title2);
    const pageList = await browser.newPage();
    await pageList.goto("https://netology.ru/navigation");
    await pageList.waitForSelector("h1");
  });

  test("The first link text 'Медиа Нетологии'", async () => {
    const actual = await getText(page, "header a + a");
    expect(actual).toContain("Медиа Нетологии");
  });

  test("The first link leads on 'Медиа' page", async () => {
    await clickElement(page, "a[class='styles_link__DZZ1o']");
    const actual = await getText(page,"div[class='hidden w-36 text-base opacity-80 md:block']");
    await expect(actual).toContain("Знания для вашего роста");
  });
});

test("Should look for a course", async () => {
  await page.goto("https://netology.ru/navigation");
  await putText(page, "input", "тестировщик");
  const actual = await getText(page, "a[data-name]", (link) => link.textContent);
  const expected = "-40%Профессия1C-программист: расширенный курс17 месяцевстарт 1 июля";
  expect(actual).toContain(expected);
});

test("Should show warning if login is not email", async () => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await putText(page, 'input[type="email"]', generateName(5));
});

describe("qamid.tmweb.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
  });

  test("Successful reservation of two seats in the cinema hall", async () => {
    await clickElement(page, "[class='page-nav__day ']");
    await clickElement(page, "[class='movie-seances__time']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='acceptin-button']");
    const actual = await getText(page, "h2[class='ticket__check-title']");
    await expect(actual).toContain("Вы выбрали билеты");
    
    
  });

  test("Successful reservation of the first row of 8 seats in the cinema hall", async () => {
    await clickElement(page, "[class='page-nav__day ']");
    await clickElement(page, "[class='movie-seances__time']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart']")
    await clickElement(page, "[class='acceptin-button']");
    const actual = await getText(page, "h2[class='ticket__check-title']");
    await expect(actual).toContain("Вы выбрали билеты");
    
  });

  test("Unsuccessful reservation of 1 seat in the cinema hall", async () => {
    await clickElement(page, "[class='page-nav__day ']");
    await clickElement(page, "[class='movie-seances__time']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken']");    
  });
});
