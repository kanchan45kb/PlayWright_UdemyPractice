const { test, expect } = require('@playwright/test');

test('ecommerce cart', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.waitForLoadState('networkidle');
    await page.locator('.inventory_item').first().waitFor();

    const items = page.locator('.inventory_item');
    const count = await items.count();

    //console.log(`Total products: ${count}`);
      let price ='';
    for (let i = 0; i < count; i++) {
        const name = await items.nth(i).locator('.inventory_item_name').textContent();
        if (name === 'Sauce Labs Bolt T-Shirt') {
             price = await items.nth(i).locator('.inventory_item_price').textContent();

            //console.log(`Product: ${name}`);
            console.log(price);
            break;
        }
    }
    await page.locator('#add-to-cart-sauce-labs-backpack').click(); 

   await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
   await page.locator("#remove-sauce-labs-backpack").click();
   await page.locator('.shopping_cart_link').click();
   console.log(await page.locator(".inventory_item_name").textContent());
   const chartprice = await page.locator('.inventory_item_price').textContent();
   console.log(chartprice);
   await expect(chartprice).toBe(price);
});