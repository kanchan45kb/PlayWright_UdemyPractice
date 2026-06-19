const {test,expect} = require('@playwright/test');
test ('Login Sucessfully',async({ page }) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     console.log(await page.title());
     page.locator('#username').fill('rahulshettyacademy');
     page.locator('#password').fill('Learning@830$3mK2');
     page.locator("[value = 'admin']").click();
     await page.locator('input#terms').click();
     await page.locator('input#signInBtn').click();
     



}
)