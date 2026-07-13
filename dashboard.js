exports.dashboard =
class dashboard {
    constructor(page){
        this.products = page.locator(".card-body");
        this.producttext = page.locator(".card-body b");
       // this.cart = page.getByRole('button',{name:' Cart '})
        this.cart = page.locator("[routerlink*='/dashboard/cart']");
        this.buttonbuy = page.locator("[type='button']").last();
        this.country = page.locator("[placeholder*='Country']");
        this.options = page.locator(".ta-results");
        this.placeorder =  page.locator('a.action__submit');
    }

async searchproductcart(productname){
   const texts = await this.products.allTextContents();
   console.log(texts);
   const countN = await this.products.count();

    for ( let i=0;i<countN;++i){
    if(await this.products.nth(i).locator("b").textContent()===productname)
    {
        await this.products.nth(i).locator("text = Add To Cart").click();
        break;
    }
}}
async addtocart(){
    await this.cart.click();
}
async fillcartdetails(){
 await this.buttonbuy.click();
 await this.country.pressSequentially('Indi');
await this.options.waitFor();
const count = await this.options.locator('button').count();
for(let i=0;i<count;++i){
   const country=await this.options.locator('button').nth(i).textContent();
    if (country === " India"){
        await this.options.locator('button').nth(i).click();
        break;
    }
}
await this.placeorder.click();
}




}