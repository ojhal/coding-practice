let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (num <= 3) {
//      return num
     console.log(index)
  }
})

let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
//      return num
     console.log(num)
  }
})