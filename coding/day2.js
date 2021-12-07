function frankenSplice(arr1, arr2, n) {
    let Array = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      Array.splice(n, 0, arr1[i]);
      n++;
    }
    return Array;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  let abc = (arr) => {
    let string = arr.slice(0,2);
    return string 
  }
  console.log(abc([9,8,7]));