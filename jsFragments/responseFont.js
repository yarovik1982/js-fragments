document.addEventListener('DOMContentLoaded', (event) => {
  function adjustFontSize() {
     const element = document.querySelector('.text');
     let fontSize = parseInt(window.getComputedStyle(element, null).getPropertyValue('font-size'));
   console.log(element);
   console.log(fontSize);
   console.log(element.scrollWidth, element.offsetWidth);
     while (element.scrollWidth > element.offsetWidth) {
       fontSize--;
       element.style.fontSize = fontSize + "px";
     }
   }
   window.addEventListener('resize', () => {
    requestAnimationFrame(adjustFontSize);
 });
  
});



// let userInput;

// do {
//   userInput = prompt("Введите что-нибудь:");
// } while (!userInput);

// alert(`Вы ввели: ${userInput}`);
