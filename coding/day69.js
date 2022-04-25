function sum() {
    var name = 'Mozilla'; // name is a local variable created by init
    function dp() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    dp();
  }
  sum();
  //arrow function

  sum = () =>{
    var name = 'Mozilla'; 
    dp = () =>{
        alert(name)
    }
    dp()
  }
  sum()