const arr = [2,4,6]

function avg(a,b,c){
  return a+b+c/3
  
}
let a = avg(...arr)//spread oprator
console.log(a)