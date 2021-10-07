const puppeteer = require("puppeteer");

let config = {
  launchOptions: {
    headless: false,
  },
};

puppeteer.launch(config.launchOptions).then(async (Browser) => {
  const page = await Browser.newPage();
  await page.goto("https://nodejs.org/en/download/");
  //Browser.close();
});
