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