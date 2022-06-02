const nestArr = [1,[7,5],[3,2,0]]

const[first,[sec,third],fourth] = nestArr
console.log(first)
console.log(fourth)
console.log(sec)



//interview quetion
console.log(1);
setTimeout(
function(){
  console.log(2)
},1000);
setTimeout(
function(){
  console.log(3)
},0);
console.log(4);
//interview quetion
function x(){
    setTimeout (function(){
      console.log(i)
    },1000)
      var i = 1;
  }
  x()