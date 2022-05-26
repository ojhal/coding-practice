var array = [2,4,5,6,7,-8,-5]
var result = _.sum(array)
console.log(result)//sum

//add dependency "lodash" on your codesandbox etc..



//_.map
var square = (n) => {
    return n * n;
  }
   
  var result = _.map([4, 8], square);
  console.log(result)