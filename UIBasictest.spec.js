const {test, expect} = require('@playwright/test');

test('Browser Context', async ({browser}) =>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await page.locator('#username').fill('kanchan');
   await page.locator("[type='password']").fill('Learning@830$3mK2');
   await page.locator('input#terms').click();
   await page.locator('input#signInBtn').click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

}
)
test('Only Pgae', async({page}) =>
{
await page.goto("https://www.google.com/")
console.log(await page.title());
await expect(page).toHaveTitle("Google");
}

)










