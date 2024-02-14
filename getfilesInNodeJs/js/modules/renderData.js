//renderData.js
export const renderData = (data) => {
   const table = document.querySelector('table')
   data.forEach(item => {
      table.innerHTML += `<tr>
            <td>${item.userId}</td>
            <td>${item.userName}</td>
            <td>${item.userEmail}</td>
            <td>${item.userPassword}</td>
            
         </tr>`
   })
}