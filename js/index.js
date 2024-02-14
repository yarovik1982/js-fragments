// //index.js



// // const createApp = () => {
// //    const app = document.querySelector('#app')
   
// // }
// const btn = document.querySelector('.btn')
// const sideNav = document.querySelector('.side-nav')

// const toggleSideNav = () => {
//    sideNav.classList.toggle('open')
// }

// btn.addEventListener('click', toggleSideNav)
import fs from "fs"
function getAll (dir){
   const files = [] 
   const allFiles = fs.readdirSync(dir)
   for(let i = 0; i < allFiles.length; i++){
      files.push(allFiles[i])
   }
   return files
} 

function getJson (dir){
   return JSON.parse(fs.readdirSync(dir))
}
console.log(getAll('C:/Users/Lenovo/Desktop/projects/#work-courses/images/icons'));
console.log(getAll('C:/Users/Lenovo/Downloads'));
console.log(getAll('C:/Users/Lenovo/Documents/Bandicam'));
console.log(getJson('C:/Users/Lenovo/Desktop/guide-by-grid/db/users.json'));