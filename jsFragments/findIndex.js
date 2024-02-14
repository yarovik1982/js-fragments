function findIndex(array, number) {
   const index = array.indexOf(number);
   return index !== -1 ? index : null;
}
console.log(findIndex([2,3,1,7], 3));
console.log(findIndex([2,3,1,7], 6));

function findIndexUsageLoop(array, number) {
   for (let i = 0; i < array.length; i++) {
       if (array[i] === number) {
           return i;
       }
   }
   return null;
}
console.log(findIndexUsageLoop([1,2,3,4,5], 3));
console.log(findIndexUsageLoop([1,2,3,4,5], 6));