function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
  console.log(findMax(2,3,4,6))
  //using direct method
  
  const arr = [2,3,4,75,89,09,747,786]
  
  console.log(Math.max(...arr))