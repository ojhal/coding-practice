//let var const 
console.log("hello")

var a 
a = 55
console.log(a)
{
  const b = "ojhal"
  console.log(b)
}
// console.log(b)

//primitive_objects

//nn ss bb u primitives

let a = null;
let b = 345;
let c = "ojhal";
let d = true //false
let e = BigInt("567") + BigInt("3");
let f = Symbol("i am good")
let g = undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(typeof e)

// objects || nonPrimitives

const item = {
  name:"john",
  age: 26,
  subject: "maths"
}
item['friend'] = 'jerry'
  console.log(item.friend)


//conditional expression

let a = prompt("Hey whats your age")
a = Number.parseInt(a)
console.log(typeof a)
if (a < 0) {
  alert("this is an invalid age")
}
else if (a < 9) {
  alert("u can not drive at age of 9")
}
else if (a < 18 && a >= 9) {
  alert("u can  drive if your age above of 18")
}
else {
  alert("u can drive")
}
console.log("you can", (a < 18 || a >= 9 ? " not drive" : "drive"))
//switch case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Oranges':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
//Q/A

let num = prompt("Hey whats your age")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your num is divisible by 2 and 3")
}
else {
  console.log("Your num is not divisible by 2 and 3")
}


// for loops
let sum = 1
let n = prompt("ENTER the value of n")  
n = Number.parseInt(n)

for(let i=1; i<=n; i++){
sum = i * sum
}5

console.log("the factorial of " + n + " is " + sum)
console.log(i)

let b = prompt("enter a number")
b = Number.parseInt(b)
factorial = 1
for (i = 1; i <= b; i++){
factorial *= i
}

console.log("the factorial of " + b + " is " + factorial )


let obj = {
  john: 20,
  cherry: 32,
  harry: 24,
  merry:18
}
// for in loop
for (a in obj){
console.log("marks of "  + a +  " are "  +  obj[a])}

//for of loop
// for (b of obj){//obj is not itrable
// console.log(b)}

for (c of "ojhal"){//ojhal is string  and its  itrable
console.log(c)}

//while loop
// let n =  prompt("hey thete")
// n = Number.parseInt(n)

// let a = 0 
// while(a<n){ //while using true or false condition
//  console.log(a) 
//   a++
// }

//do while loop
let n =  prompt("hey thete")
n = Number.parseInt(n)

let a = 10 
do{ //while using true or false condition
 console.log(a) 
  a++
}while(a<n)
 
//Functions
let a = 1
let b = 2
let c = 3

function plusOne(x, y) {
  return Math.round(1 + (x + y) / 2)
}
console.log(plusOne(a, b))
console.log(plusOne(b, c))
console.log(plusOne(c, a))

// Via Arrow  function

let e = 1
let f = 2
let g = 3
const onePlus = (x, y) => {
  return Math.round(1 + (x + y) / 2)
}

console.log(onePlus(e, f))
console.log(onePlus(f, g))
console.log(onePlus(g, e))

const hello = () => {
  return "hi"
}
const v = hello();
console.log(v)


let marks = {
  harry: 30,
  mohan: 67,
  zeeshan: 55,
  john: 45
}
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

let cn = 20
let i 
while(i != cn){
  i = prompt("Enter a Number")
}
console.log("you have enter correct number")

const mean = (a,b,c,d) =>{
   return (a + b + c + d) / 4
} 
console.log(mean(2,3,4,5))

// srings

//let boy1 = "pramod"
let boy2 = "vinod"

let sent = `${boy1} is friend of ${boy2}`
console.log(sent)
console.log(boy2.toUpperCase())
console.log(boy2.toLowerCase())
console.log(boy2.slice(2, 4)) // 4 is not included last one is not included
console.log(boy2.slice(2))
console.log(boy2.replace("vin", "rin"))

let a = "    ojhal is a good girl        "
console.log(a.trim())
console.log(a.includes("are"))
console.log(a.indexOf("is"))
// escape sequence characters


let fruit = 'bana\'na'
console.log(fruit)
let fruit1 = 'bana\nna'
console.log(fruit1)
let fruit2 = 'bana\rna'
console.log(fruit2)
let fruit3 = "bana\"na"
console.log(fruit3)


let G = "shivani"
console.log(G[0])
console.log(G[1])
console.log(G[2])
console.log(G[3])
for (let i = 0; i < G.length; i++) {
  console.log(G[i])
}

const sentence = 'The quick brown  jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.startsWith('Is'));


const str = "plz give me rs 50"
const amount = Number.parseInt(str.slice(15))
console.log(typeof amount)

//Note string is immutable



//arraty methods

let array = [1, 2, 3, 44, null, "number"]
console.log(typeof array)
let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i])
}

let num = [2, 4, 56, 5, 7, 5]
let b = num.toString()
console.log(b)
let c = num.join("_")
console.log(c, typeof c)
let d = num.pop()
console.log(num, d)
let d1 = num.push(99)
console.log(num, d1)

let d2 = num.shift()
console.log(d2)
console.log(num)

let d22 = num.unshift(77)
console.log(d22)
console.log(num)

delete num[0]
console.log(num)

let compare = (a,b) => {
  return a - b 
}
let num_Less = [5552,443,4,444,1114,4115,22253]
num_Less.sort(compare)
console.log(num_Less)
let num_more = [23,3,4,5,53,950,58]
let num_even_more = [23,03,4333,3335,5343,950,58]

let newArray = num_Less.concat(num_more,num_even_more)
console.log(newArray)

let splice = [25,50,75,100]
splice.splice(2,3, 222,111,3333)
console.log(splice)

let new1 = splice.slice(2,3)
  console.log(new1)

  //loops in array
  let arr = [2,3,4,5,6]
arr.forEach((ele)=>{
  console.log(ele*ele)
})

let array = "ojhal"
let a = Array.from(array)
console.log(a)

//for.....of

for (let i of arr){
  console.log(i)
}

//for....in


for (let i in arr){ //for keys
  console.log(arr[i])
}
//map method 

// let newArr = [24,65,57,99]
// let a1 = newArr.map((e,i)=>{
//   console.log(e,i)
//   return e + 1
// })
// console.log(a1)

let newArr = [24,65,57,99]
let a1 = newArr.forEach((e,i)=>{
  console.log(e,i)
  return e + 1
})
console.log(a1)

//filter method

let newArr1 = [20,10,03,34,5,2,3,1]
let a2 = newArr1.filter((ele)=>{
  return ele<10
})
console.log(a2)


//reduce 

let newArr2 = [1,2,3,4]
let a3 = newArr2.reduce((h1,h2) =>{
  return h1 * h2 
})
console.log(a3)

//Exercise
let number = Math.floor((Math.random() * 100) + 1); // Generates a random number b/w 1 and 100
let chances = 0; // Initial vaulue of chances taken to guess a number
let guess; // Variable to store the number to be input from user to be guessed

console.log("This is a guessing game and you have to enter a number and if it matches with the number generated by computer, then you win...\n");
guess = prompt("Enter a number between 1 and 100");
++chances; // To increment the number of chances taken

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("Number entered is greater");
    guess = prompt("Enter again!!");
    guess = Number.parseInt(guess);
    ++chances; // To increment the number of chances taken
    continue;
  }

  else if (guess < number) {
    console.log("Number entered is smaller");
    guess = prompt("Enter again!!");
    guess = Number.parseInt(guess);
    ++chances; //To increment the number of chances taken
    continue;
  }

} while (guess != number); //break the loop if number entered is equal to the number generated

let score = 100 - chances; //To store the score of your game
console.log("\nCongratulations🥳🥳\nThe number generated was", number + " and you guessed it right😁\nYour final score is", score);

//  SEARCHING DOM

// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Nice, you triggered this alert message!', 'success')
//   })
// }

let ctitle = document.getElementById("firstClass")
ctitle.style.color = "red"


let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "red"

//setTimeout
document.write("hello")
  
let a = setTimeout (function(){
  alert("i am alert")
}, 5000)
let b = prompt("do you want run set time out??")
  if("n" == b){
    clearTimeout(a)
  }

console.log(a)