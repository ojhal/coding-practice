function newList(alph, num) {
    var list = [];
    for (var i=0;i<alph.length;i++) {
    list.push(alph[i]);
    list.push(num[i]);
    }
    return list;
    }
    console.log(newList(['a','b','c'],[1,2,3]));



let numbers1 = [1000, 221 , 32, 36, 100, 280, 230 ];
numbers1.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers1);