var prefixCount = function(words, pref) {
    let counter = 0
 for (let word of words) {
   word.search(pref) === 0 ? counter++ : null
 }
 
 console.log(counter)
};
prefixCount(["pay","attention","practice","attend"],"at")
//Q14