const{test, expect} = require('@playwright/test')
test('LoginPage1',async({page}) => 
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('#userEmail').fill('james.bond45@yopmail.com');
await page.locator('#userPassword').fill('Test@123');
await page.locator('#login').click();
//console.log(await page.locator('.card-body b').first().textContent());
await page.waitForLoadState('networkidle')
await page.locator('.card-body b').first().waitFor();
const products = await page.locator(".card-body");
const countN = await products.count();
const texts = await page.locator(".card-body b").allTextContents();
console.log(texts);
const nameproduct = 'ZARA COAT 3';
for ( let i=0;i<countN;++i){
    if(await products.nth(i).locator("b").textContent()=== nameproduct)
    {
        await products.nth(i).locator("text = Add To Cart").click();
        break;
    }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const boolean = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
console.log(boolean);
await page.locator("[type='button']").last().click();
const cardnumber = await page.locator("[value*='4542 ']");
await cardnumber.clear();
await cardnumber.fill('1234567890123456');
console.log(await cardnumber.inputValue());
await page.locator('.field .txt').nth(2).fill('james bond');
await page.locator("[placeholder*='Country']").pressSequentially('Indi');
const options = await page.locator('.ta-results');
await options.waitFor();
const count = await options.locator('button').count();
for(let i=0;i<count;++i){
   const country=await options.locator('button').nth(i).textContent();
    if (country === " India"){
        await options.locator('button').nth(i).click();
        break;
    }
}
// Place oreder 
const placeorder = await page.locator('a.action__submit').click();

await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
// Capture order number // 
const order = await page.locator('label.ng-star-inserted').textContent();
const trimmedValue = order.replace(/\|/g, '').trim();
console.log(trimmedValue);
await page.locator("button[routerlink*='myorders']").click();
const Ordertable = await page.locator('table tbody tr');

for(let i=0;i< await Ordertable.count();++i){
      const orderId = await Ordertable.locator('th').nth(i).textContent();
      if ( orderId.includes(trimmedValue)){
          await Ordertable.locator('button').nth(i).first().click();
          break;
      }

}
await page.locator(".-teal").click();

}


)
