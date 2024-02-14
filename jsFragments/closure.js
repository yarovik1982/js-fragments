function createPerson(name,age){
   let pesonName = name
   let personAge = age

   return{
      getName(){
         return name
      },
      getAge(){
         return age
      },
      setAge(value){
         age = value
      }
   }
}

const person = createPerson("Oleg", 54)
console.log(person.getName());
console.log(person.getAge());
console.log(person.pesonName);

function createCounter() {
   let count = 0;
   return function() {
     count += 1;
     return count;
   };
 }
 
 let counter = createCounter();
 
 console.log(counter());  // Выводит: 1
 console.log(counter());  // Выводит: 2
 console.log(counter());  // Выводит: 3
//  console.log(setInterval(()=> counter(),1000));
 