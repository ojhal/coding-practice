const str = "big black bug bit a big black dog on his big black nose"
const functionStrDuplicat = str => {
   const strArr = str.split(" ");
  const res = [];
  for(let i =0; i<strArr.length; i++){
    if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
  }
  return res.join(" ");
};
console.log(functionStrDuplicat(str));
//Q13