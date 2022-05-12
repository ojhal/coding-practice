var arrayStringsAreEqual = function(word1, word2) {
    var firstString = word1.join('');
    var secondString = word2.join('');
    
    if (firstString == secondString) {
        console.log(true);
    } else {
        console.log (false);
    }
};
arrayStringsAreEqual(["ab", "c"],["ab", "c"])
// Q11
