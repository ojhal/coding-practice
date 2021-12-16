let myarray = [5, 10, 3, 2], result = [];

for (let i = 0, s = myarray[0]; i < myarray.length; i++, s += myarray[i]) 
  result.push(s);
 console.log(result)