var array = [1,2,3,4,5];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(number => {
    return number % 2 !== 0;
  });
  
  console.log(odds)