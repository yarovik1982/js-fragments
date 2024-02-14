function getSum  ()  {
   let sum = 0
   for(let i = 0; i < arguments.length; i++){
      sum += arguments[i]
   }
   return sum
}

const sum = getSum(1,2,3,4,5)
console.log(sum);

const getTotal = (...args) => {
   let total = 0
   for(let i = 0; i < args.length; i++){
      total += args[i]
   }
   return total
}

const total = getTotal(1,2,3,4,5)
console.log(total);