// String.prototype.stringFormatter = function(){
//    return this.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }

// const toCapitalize = (str) => str.stringFormatter()
// console.log(toCapitalize('vVv bbb ccC'));
// console.log( ({}).prototype === ({}).__proto__);

const num1 = 1
const num2 = 10
console.log(num1.__proto__ === num2.__proto__);
console.log(num1.__proto__);