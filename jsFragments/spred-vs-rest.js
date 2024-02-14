const data = {
   val_1: "value-1",
   val_2: "value-2"
}

const spred = ({...data}) => {
   data.val_3 = "value-3"
   return data
}
console.log(spred(data));

const obj = {
   str:"str",
   bool: true,
   number:10
}

const rest = (data) => {
   for(let prop in data){
      if(prop === 'number' & !isNaN(data[prop]))
      return {data, ...{number:data[prop]}}
   }
}
console.log(rest(obj));

const numbers = [1,2,3,4,5,6,7,]

const arrRepliceByNumber = (arr, num) => {
   
   const index = arr.indexOf(num)
   if(index === -1) return arr

   const firstPart = arr.slice(0, index )
   const secondPart = arr.slice(index + 1)

   const result = [...firstPart, secondPart]
   return result
   
}
console.log(arrRepliceByNumber(numbers,5));
console.log(arrRepliceByNumber([10,20,30,5,40, 50],5));

console.log(6/10);