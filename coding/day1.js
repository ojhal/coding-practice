let x = 3
let y = 6

let h = (arr) => {
  return  arr
}
let obj1 = {
    name: "ojhal",
    age: 25,
    palace: "Rajasthan"
  }
  
  function obj2(giveName){
    this.name = giveName
    
    
  }
  let obj3 = new obj2("ojhal")
  console.log(obj3)
console.log((x < 10 || y > 1))
console.log(h([1,2,3]))