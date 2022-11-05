//15/10/22
function simpleArraySum(ar) {
    // Write your code here
    let sum = 0
     for(let i=0; i< ar.length; i++){
         sum += ar[i]
     }
     return sum
}

//16/10/22
let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = [...x];
console.log("Clone of the said array:")
console.log(y)

//17/10/22
const hour = new Date().getHours(); 

if(hour < 18){
  console.log("gm")
}else if(hour > 18){
  console.log("gn")
}
//18/10/22
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact);

//19/10/22
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b +=  9;
c +=  7;

//20/10/22
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//5/11/22
const data = new Promise(function(resolve,reject){
    setTimeout (function(){
      resolve ("new state")
      
    },2000)
  })
  console.log(data)