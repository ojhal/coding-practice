const patkar = {
    name:"ojhal",
    qualification:"msc",
    sum: function(){
      var add = 2+2
      console.log(`${add}`)
      console.log(this)
      
    }
  }
  patkar.sum()
//   in regular function this refers to the global/window object
// in a method this refers to the owner object
// in use strict mode its undefined