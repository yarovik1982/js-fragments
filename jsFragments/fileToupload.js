const btnSend = document.getElementById('send');
const file = document.getElementById('file');

btnSend.addEventListener('click', uploadFileFetch)
//___fetchQuery    
function uploadFileFetch() {
   const fileInput = document.getElementById('file');
   const file = fileInput.files[0];
   const formData = new FormData();
   formData.append('file', file);

   fetch('/end-point/uploadFile', {
       method: 'POST',
       body: formData
   })
   .then(response => {
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }
       return response.json();
   })
   .then(data => console.log(data))
   .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

//___PromiseQuery    
function uploadFilePromise(file) {
   return new Promise((resolve, reject) => {
       let xhr = new XMLHttpRequest();
       let formData = new FormData();
       formData.append('file', file);

       xhr.open('POST', '/end-point/uploadFile', true);

       xhr.onload = function () {
           if (xhr.status === 200) {
               resolve(JSON.parse(xhr.response));
           } else {
               reject(new Error('Upload failed: ' + xhr.statusText));
           }
       };

       xhr.onerror = function () {
           reject(new Error('Network error'));
       };

       xhr.send(formData);
   });
}

//___axiosQuery     
import axios from 'axios';

function uploadFileAxios(file) {
    let formData = new FormData();
    formData.append('file', file);

    axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('There has been a problem with your axios operation:', error));
}

