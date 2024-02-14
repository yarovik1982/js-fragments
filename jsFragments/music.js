const muse = () => {
   const btns = document.querySelectorAll('.keySound')// у каждой кнопки должен быть идентификатор соответсвующий ключу объекта notes
    
   const notes = {
     'a':'path/to/C.mp3',//до
     's':'path/to/D.mp3',//ре
     'd':'path/to/E.mp3',//ми
     'w':'path/to/F.mp3',//фа
     'q':'path/to/G.mp3',//соль
     'e':'path/to/A.mp3',//ля
     'x':'path/to/B.mp3',//си
 }
 
   btns.forEach(btn => {
     btn.addEventListener('click', e => {
       const audio = new Audio(notes[e.target.id])
       audio.play()
     })
   })
 
   document.addEventListener("keydown", (e)=> {
     const audio = new Audio(notes[e.key])
     audio.play()
   })
 }
 document.addEventListener("DOMContentLoaded", function() {
   muse();
 });