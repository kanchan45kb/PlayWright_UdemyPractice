const excelsheetNew = require('exceljs');

async function writeExcel(searchvalue,replacevalue,filepath) {
  
    const testexcel = new excelsheetNew.Workbook();
    await testexcel.xlsx.readFile(filepath);
    const worksheet = testexcel.getWorksheet('Sheet2');   
  const output = await readExcel(worksheet,searchvalue);
     const cell= worksheet.getCell(output.row,output.column);
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
writeExcel("Lilly","Joe","E:\\exceldemotest.xlsx")