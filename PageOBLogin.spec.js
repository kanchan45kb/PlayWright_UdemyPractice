const { test } = require('@playwright/test');
const { POmanager } = require('../pageobjects/POmanager');
const dataset = require('../utils/PgaeobjectTestdata');
for (const data of dataset){

test(`LoginPage ${data.productname}` , async ({ page }) => {
  
    const poManager = new POmanager(page);

    const login = await poManager.getlogin();


    await login.urlgoto();
    await login.visitLoginpage(data.email,data.password);
    const Dashboard = await poManager.allproducts();
    await Dashboard.searchproductcart(data.productname);
    await Dashboard.addtocart();
    await Dashboard.fillcartdetails();


})};
 
 


 //const pagelogin = new Logintestcase(page);
 //await pagelogin.urlgoto();
 //await pagelogin.visitLoginpage(email, password);
 //await page.waitForLoadState('networkidle');
 /*const buyproduct = new dashboard(page)
 const productname = 'ZARA COAT 3'
 await buyproduct.searchproductcart(productname);
 await buyproduct.addtocart();
 await page.locator("div li").first().waitFor();
await buyproduct.fillcartdetails();*/
