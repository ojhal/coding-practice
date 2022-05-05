const strArr = (s,k) => {
    console.log(s.split(' ').splice(0, k).join(' '))
}

strArr("Hello how are you Contestant",4)

var truncateSentence = function(s, k) {
     const strArr = s.split(" ");
    const res = [];
    
    for(let i=0; i<k; i++){
        res.push(strArr[i])
    }
    
    console.log(res.join(" "))
};
truncateSentence("Hello how are you Contestant",4)

//Q10