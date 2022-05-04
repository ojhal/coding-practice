var firstPalindrome = function(words) {
    let isPalindrome = ''  
  for (let word of words) {
    if (word === word.split('').reverse().join('')) {
      console.log(word === word.split(''))
      console.log(word)
      isPalindrome = word
      break
    }
  }
  console.log(isPalindrome)
};
firstPalindrome( ["abc","car","ada","racecar","cool"])
//Q9