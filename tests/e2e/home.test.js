const { Builder, By, until } = require('selenium-webdriver');

describe('Home Page E2E Test', () => {
  let driver;

  jest.setTimeout(30000);

  beforeAll(async () => {
    const seleniumUrl = process.env.SELENIUM_REMOTE_URL || 'http://localhost:4444/wd/hub';

    driver = await new Builder()
      .forBrowser('chrome')
      .usingServer(seleniumUrl)
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('should display Welcome to CI/CD', async () => {
    const appUrl = process.env.APP_URL || 'http://host.docker.internal:3000';

    await driver.get(appUrl);

    const header = await driver.wait(
      until.elementLocated(By.css('h1')),
      10000
    );

    const text = await header.getText();
    expect(text).toBe('Welcome to CI/CD');
  });
});