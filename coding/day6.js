
var sum_odd_numbers = function () {
    var sum = 0;
    for (var i = 1; i < 3000; i = i + 2) {
        sum = sum + i;
    }
    return sum;
}
console.log(sum_odd_numbers());

function largestNum(arr){
    var largestNum = [0,0];
    for (var i = 0; i < arr.length; i++){
      for (var j = 0; j < arr[i].length; j++){
        if(arr[i][j]>largestNum[i]){
          largestNum[i] = arr[i][j]
        }
      }
    }
    return largestNum;
  }
  console.log(largestNum([[1,4],[19,45]]))
  
  