var a = "scaler"
var result = a.substring(2,4)
console.log(result);



function pattern (){
    var newRow = 4;
    var newColumn = 7
    for(var i=1; i<=newRow; i++){
      for(var j=1; j<=newColumn; j++){
        document.write ("*")
      }
     document.write("<br>")
    }
  }
  pattern ();