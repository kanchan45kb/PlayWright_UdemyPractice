export class Logintestcase {

    constructor(page) {
        this.page = page;
        this.email = page.locator('#userEmail');
        this.Password = page.locator('#userPassword');
        this.signbutton = page.locator('#login');
    }

    async urlgoto() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async visitLoginpage(email, password) {
        await this.email.fill(email);
        await this.Password.fill(password);
        await this.signbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
}