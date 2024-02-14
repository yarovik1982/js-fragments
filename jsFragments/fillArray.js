// const fillArray = (a, b) => {
//    const arr = []
//    for(let i = a; i <= b * a; i= i +2){
//       arr.push(i )
//    }
//    return arr
// }
// console.log(fillArray(2,10));


// const fillArrayByRecurse = (num, i = 2, arr = []) => {
//    if(i > num) {
//       return arr;
//    } else {
//       arr.push(i);
//       return fillArrayByRecurse(num, i + 1, arr);
//    }
// }
// console.log(fillArrayByRecurse(5));


function getMultiples(x, n) {
   let result = [];
   for(let i = 1; i <= n; i++) {
       result.push(i * x);
   }
   return result;
}
console.log(getMultiples(1, 10));

console.log(getMultiples(2, 5));