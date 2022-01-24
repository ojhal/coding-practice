var num = [5,34,67,87,01,0,23,12]
num.sort()
console.log(num)

function func1(a, b, c) {
    console.log(arguments[0],[1],[2])
  
  }
  
  func1("ojhal", 2, 3);//The arguments object

  function func2(...arguments) {//using spread oprator
    console.log(arguments[0])
  
  }
  
  func2("ojhalP", 5, 8);
  
  function foo(...args) {
    console.log (args[1])
  }
  foo(1, 2, 3)
  