const {test, expect} = require('@playwright/test')

test('ParentChildWindow', async({browser}) =>
{
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
       
       // Radio button and Selector 
       const radio = await page.locator('.radiotextsty').last();
      await radio.click();
      await page.locator('#okayBtn').click();
      await page.locator('.radiotextsty').first().click();
      await radio.click();
      await page.locator('#cancelBtn').click();
      
       const dropdown = await page.locator('select.form-control');
       await dropdown.selectOption('consult');
       console.log(await dropdown.textContent('value'));
       const blinkurl = await page.locator("[href*='documents-request']");
       await expect(blinkurl).toHaveAttribute('class','blinkingText');
       
       const [newpage] = await Promise.all( [
        context.waitForEvent('page'),
       await blinkurl.click(),
  
       ] );
       const text = await newpage.locator('.im-para.red').textContent();
       console.log(text);
       const array = await text.split('@')
       const domain = await array[1].split(" ")[0];
       console.log(domain);
       const username = await domain.replace('.com','')
       console.log(username);
       
       const stringtext = await page.locator('.text-center.text-white').textContent();
       console.log(stringtext);
      const string1= await stringtext.split('Password is')[1];
      const password = string1.replace(')','')
       console.log(password);     
       await page.locator('#username').fill(username);
       await page.locator('#password').fill(password);  
       await page.locator('#terms').check();
       await page.locator('#signInBtn').click(); 
                             

}

)