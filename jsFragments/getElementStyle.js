// const getElementStyle = (properties) => {

//    const create = () => {
//      const element = document.createElement('div');
//      element.style.cssText = 'width:100px; height:100px; background:black;';
//      document.body.prepend(element);
//      return element;
//    }

//    const getStyle = (element, properties) => {
//      const styles = getComputedStyle(element);
//      const result = {};
//      properties.forEach(property => {
//        result[property] = styles[property];
//      });
//      return result;
//    }
//    return getStyle(create(), properties);
//  }

//  const renderStyles = () => {
//    const out = document.querySelector('.out')
//    out.textContent = JSON.stringify(getElementStyle(['background-color', 'width', 'height']))
   
//  }
//  renderStyles()

//  console.log(document.body);

// String.prototype.stringFormatted = function() {
//    return this.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//  }
 
//  console.log('MAMA МЫла раМУ'.stringFormatted());

class Counter {
   value = 0
   accumulator(){
     while(true){
       const input = prompt('введите число или "stop" для остановки')
       if (input.toLowerCase() === 'stop' || this.value === 100) {
         alert("Ваш результат " + this.value)
         break;
       }
       const num = parseFloat(input)
       if (isNaN(num)) {
         alert('Просил же, введите число или "stop"');
         continue;
       }
       this.value += num
       alert(this.value)
     }
   }
 }
 const counter = new Counter()
 counter.accumulator()
 
 
 
 
 