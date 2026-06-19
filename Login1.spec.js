const{test} = require('@playwright/test')
test('LoginPage1',async({page}) => 
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('#userEmail').fill('james.bond45@yopmail.com');
await page.locator('#userPassword').fill('Test@123');
await page.locator('#login').click();
//console.log(await page.locator('.card-body b').first().textContent());
await page.waitForLoadState('networkidle')
console.log(await page.locator('.card-body b').allTextContents());



}


)