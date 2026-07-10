const {test, expect} = require('@playwright/test');
const excelsheetNew = require('exceljs');
async function writeExcel(searchvalue,replacevalue,change,filepath) {
  
    const testexcel = new excelsheetNew.Workbook();
    await testexcel.xlsx.readFile(filepath);
    const worksheet = testexcel.getWorksheet('Sheet1');   
  const output = await readExcel(worksheet,searchvalue,change);
     const cell= worksheet.getCell(output.row,output.column+change.columnchange);
    cell.value = replacevalue;
    await testexcel.xlsx.writeFile(filepath);
    console.log(cell.value)
  
}   

async function readExcel(worksheet,searchvalue){
      let output = {row:-1,column:-1};
        worksheet.eachRow((row,rowNumber)=> {
                row.eachCell((cell,colNumber)=>{
                   if(cell.value === searchvalue){
                    output.row = rowNumber;
                    output.column = colNumber;
                   }
                            })
    
        })
        return output;
}
test('upload and download' , async({page})=>{
  const searchvalue = 'Apple';
  const updatedvalue = '550';
  await page.goto('https://rahulshettyacademy.com/upload-download-test/');
  const download = page.getByRole('button',{name:'Download'}).click();
  const waitfordownlaod = await page.waitForEvent('download');
  writeExcel(searchvalue,updatedvalue,{rowchange:0,columnchange:2},"E:\\fruits_details.xlsx")
  await waitfordownlaod;
  await page.locator('#fileinput').click();
  await page.locator('#fileinput').setInputFiles('E:\\fruits_details.xlsx');
  const textsearch = await page.getByText(searchvalue);
  const desiredrow = await page.getByRole('row').filter({has:textsearch});
   expect (await desiredrow.locator('#cell-4-undefined')).toContainText(updatedvalue.toString());
  



})
