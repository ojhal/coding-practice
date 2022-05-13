var countConsistentStrings = function(allowed, words) {
    const allowedLetters = new Set(allowed)
    let count = 0;
    
    for (word of words) {
        let wordInQuestion = word.split('')
        if ([...wordInQuestion].every(letter => allowedLetters.has(letter))) count++
    }
    
    console.log(count);
};
countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"])
//Q12