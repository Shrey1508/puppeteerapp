const puppeteer = require("puppeteer");

let config = {
  launchOptions: {
    headless: false,
  },
};

const loginPage = {
  email: "input#email",
  pass: "input#pass",
  //btn: "button[name='login']",
};

//puppeteer.launch(config.launchOptions).then(async (Browser) => {

//OR

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto("https://en-gb.facebook.com/");
  await page.waitForSelector(loginPage.email);
  await page.type(loginPage.email, "bboy.singhal.shrey@gmail.com");
  await page.type(loginPage.pass, "TCSjoin@36");
  await page.screenshot({ path: "screenshot.png" });
  await page.screenshot({ path: "screenshot1.png", fullPage: true });
  await page.click("button[name='login']");
  await page.pdf({ path: "samplepdf.pdf", format: "a4" });
})();
