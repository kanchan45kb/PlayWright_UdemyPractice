const {test} = require('@playwright/test')
test('Register Usre', async({page})=>{
 await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
 await page.locator('.login-wrapper-footer-text').click();
 await page.locator('#firstName').fill('James');
 await page.locator('#lastName').fill('Bond');
const email = await page.locator('#userEmail').fill('james.bond45@yopmail.com');
await page.locator('#userMobile').fill('9000080000');
const Occupation = await page.locator('[formcontrolname="occupation"]');
await Occupation.selectOption('Student');
await page.locator("[value='Female']").click();
await page.locator('#userPassword').fill('Test@123');
await page.locator('#confirmPassword').fill('Test@123')
await page.locator("[type='checkbox']").click();
await page.pause();

await page.locator("[value='Register']").click();


})