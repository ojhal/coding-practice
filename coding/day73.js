var flipAndInvertImage = function(image) {
    let output = [];
for(let val of image){
let arr = val.reverse();
for(let j=0; j<arr.length; j++){
arr[j] = arr[j] === 1 ? 0 : 1;
}
output.push(arr);
}
// return output;
  console.log(output)
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
//L8

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])

var flipImage = (image) => {
  let ans = []
  for (let val of image){
    let arr = val.reverse()
    for(let i =0; i<arr.length; i++){
      arr[i]=arr[i] === 1?0:1
    }
    ans.push(arr)
  }
  console.log(ans)
}
flipImage([[0,0,1],[1,0,1],[0,0,0]])//calling