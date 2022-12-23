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
