function f1 (a, b){
   a = a + 1
   b = b * 2
   return {a, b}
}
const {a:first, b:second} = f1(1,2)
console.log(first);
console.log(second);

const {a,b} = f1(2,3)
console.log(a);
console.log(b);
// const raw = f1(1, 2)
// console.log(raw.a);
// console.log(raw.b);

const dataData = {
   beer:[{},{},{}],
   breweries:[{},{}]
}

const destr = (obj) => {
   const {beer, breweries} = obj
   return [beer, breweries]
}
console.log(destr(dataData));// [ undefined, undefined ]