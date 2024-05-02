let page;

beforeEach(async () => {
  page = await browser.newPage();
  
}, 180000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 20000);   
});

describe("Github new page tests", () => { 
  beforeEach(async () => {
    await page.goto("https://github.com/services");
  });  

  test("The h1 header content", async () => {
    const secondLink = await page.$("header div div a");
    await secondLink.click();
    await page.waitForSelector('h1');
    const title3 = await page.title();    
    expect(title3).toEqual('GitHub: Let’s build from here · GitHub');
  }, 25000);

  test("The second link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains button contact experts", async () => {
    const btnSelector = "#services-introduction > div.container-xl.p-responsive.position-relative.z-1 > div.pt-10.pb-4.pb-md-7.d-flex.flex-column.flex-lg-column.flex-items-center.text-center > div.mt-4.mt-md-6.mb-4.position-relative.z-2.by-2.by-lg-0.bx-lg-2.d-flex.flex-column.flex-lg-row > div";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Contact Experts")
  }, 20000);  
});

describe("Github new page tests 3", () => { 
  beforeEach(async () => {
    await page.goto("https://github.com/features");
  });  

  test("The h1 header content", async () => {
    const thirtLink = await page.$("header div div a");
    await thirtLink.click();
    await page.waitForSelector("h1");
    const title4 = await page.title();    
    expect(title4).toEqual('GitHub: Let’s build from here · GitHub');
  }, 23000);

  test("The thirt link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },13000);

  test("The page new contains button experience AI, whith Copilot Chat", async () => {
    const btnSelector = "body > div.logged-out.env-production.page-responsive > div.application-main > main > div.position-relative.z-1 > div.p-responsive.container-xl.overflow-x-hidden.pt-4.d-flex.flex-column.flex-md-row > div:nth-child(1) > a";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Experience AI", " with Copilot Chat")
  }, 20000);  
});
