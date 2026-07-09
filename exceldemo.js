const ExcelJs = require('exceljs')

async function readExcelFile1() 
{
   const workbook = new ExcelJs.Workbook();
   await workbook.xlsx.readFile('E:\\exceldemotest.xlsx');
   const worksheet = workbook.getWorksheet('Sheet1');
   worksheet.eachRow((row,rowNumber) =>
      {
       row.eachCell((cell,colNumber)=>{
           console.log (cell.value);
       })
   }
)}

readExcelFile1();
async function readExcelFile2() 
{
   const workbook = new ExcelJs.Workbook();
   await workbook.xlsx.readFile('E:\\exceldemotest.xlsx');
   const worksheet = workbook.getWorksheet('Sheet1');
   let data=[];
   worksheet.eachRow((row,rowNumber) =>
      {
      data.push(row.values.slice(1));
       })
       console.log(data);
   }


readExcelFile2();

async function readExcelFile3() 
{
   const workbook = new ExcelJs.Workbook();
   await workbook.xlsx.readFile('E:\\exceldemotest.xlsx');
   const worksheet = workbook.getWorksheet('Sheet1');
   let header =[]
   let data=[];
   worksheet.eachRow((row,rowNumber) =>
      {
        if(rowNumber===1)
        {
            header = row.values.slice(1);
        }
        else
        {
         let obj ={};
           row.values.slice(1).forEach((value,index)=>{
               obj[header[index]] = value;
           });
           data.push(obj);
        }
       })
       
       console.log(data);
   }


readExcelFile3();