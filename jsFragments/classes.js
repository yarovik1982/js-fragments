// {
// class Main {
//    constructor( ){
//       this.width = 100
//       // this.height = height
//    }
//    setWidth(value){
//       this.width = value
//    }
//    setHeight(value){
//       this.height = value
//    }
// }

// const elem = new Main()
// console.log(elem.width, '\n');
// elem.setWidth(200)
// console.log(elem.width);
// }

class Some {
   constructor(props){
      this.props = props;
   }
   getValue(key){
      return this.props[key];
   }
   getValues(){
      return Object.values(this.props)
   }
   setValue(key, value){
      this.props[key] = value;
   }

}
const some = new Some({name:'oleg'})
console.log(some.getValue('name'));
console.log(some.setValue('age', 50));
console.log({some});
console.log(some.getValues());