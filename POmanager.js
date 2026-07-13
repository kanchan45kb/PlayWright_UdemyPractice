const {Logintestcase} = require('./Logintestcase')
const{dashboard} = require('./dashboard')
export class POmanager {
 
      constructor(page){
        this.page = page,
        this.loginpage = new Logintestcase(page);
        this.dashboard = new dashboard(page);


      }

async getlogin(){

    return this.loginpage;

}

 async allproducts(){
  return this.dashboard;
 }
}
//module.exports={POmanager}