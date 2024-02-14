//index.js
import fs from "fs"
// const fs = require('fs')
console.log("work");
function getJson(dir) {
  const content = fs.readFileSync(dir, 'utf-8');
  return JSON.parse(content);
}

const data = getJson('../db/users.json');

console.log(data);

// renderData(data)











// function getAll (dir){
//    const files = [] 
//    const allFiles = fs.readdirSync(dir)
//    for(let i = 0; i < allFiles.length; i++){
//       files.push(allFiles[i])
//    }
//    return files
// } 




// console.log(getAll('C:/Users/Lenovo/Desktop/projects/#work-courses/images/icons'));
// console.log(getAll('C:/Users/Lenovo/Downloads'));
// console.log(getAll('C:/Users/Lenovo/Documents/Bandicam'));
// console.log(getJson('C:/Users/Lenovo/Desktop/guide-by-grid/db'));