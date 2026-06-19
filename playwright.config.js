// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config =({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 40 *1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  projects:[
    {
      
  use: {
   browserName:'chromium',
  headless: false,
  
  },
},
{
use: {
   browserName:'firefox',
   headless: true,
   
  },
}
],
});
module.exports=config