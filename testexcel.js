const excelsheet = require('exceljs');
/*async function excelRead() {
const testexcel = new excelsheet.Workbook();
await testexcel.xlsx.readFile('E:\\exceldemotest.xlsx');
const worksheet2 = testexcel.getWorksheet('Sheet2');
let data2=[];
worksheet2.eachRow((row,rowNumber) =>
   {
   data2.push(row.values.slice(1));
    })
    console.log(data2);
}
excelRead();

async function excelRead2() {
const testexcel = new excelsheet.Workbook();
await testexcel.xlsx.readFile('E:\\exceldemotest.xlsx');
const worksheet = testexcel.getWorksheet('Sheet2');

worksheet.eachRow((row,rowNumber) =>
   {
       row.eachCell((cell,colNumber)=>{
           console.log (cell.value);
       })
    })}


excelRead2();

async function excelRead3() {
    const testexcel = new excelsheet.Workbook();
    await testexcel.xlsx.readFile('E:\\exceldemotest.xlsx');
    const worksheet = testexcel.getWorksheet('Sheet2');
    worksheet.eachRow((row,rowNumber)=> {
            row.eachCell((cell,colNumber)=>{
               if(cell.value === 'Stew'){
                console.log(rowNumber,colNumber,cell.value);
               }
                        })

    })
    const cell= worksheet.getCell(3,2);
    cell.value = 'Ronald';
    await testexcel.xlsx.writeFile('E:\\exceldemotest.xlsx');
    console.log(cell.value)
}
excelRead3();*/
async function excelRead4() {
    let output = {row:-1,column:-1};
    const testexcel = new excelsheet.Workbook();
    await testexcel.xlsx.readFile('E:\\exceldemotest.xlsx');
    const worksheet = testexcel.getWorksheet('Sheet2');
    
    worksheet.eachRow((row,rowNumber)=> {
            row.eachCell((cell,colNumber)=>{
               if(cell.value === 'white'){
                output.row = rowNumber;
                output.column = colNumber;
               }
                        })

    })
    const cell= worksheet.getCell(output.row,output.column);
    cell.value = 'Martin';
    await testexcel.xlsx.writeFile('E:\\exceldemotest.xlsx');
    console.log(cell.value)
}
excelRead4();