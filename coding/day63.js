//Promise .then() .catch()
function func1(){
    return new Promise(function(resolve,reject){
          setTimeout(()=>{
            const error = false;
            if(!error){
            console.log("promise has been resolved")
            resolve()
            }
            else{
              console.log("promise has not been resolved")
              reject('sorry not fullfilled')
            }
          },2000);             
    })
   }
  func1().then(function(){
    console.log('thanks for resolving')
  }).catch(function(){
     console.log('very bad bro')
  })
  function func1(){
    return new Promise(function(resolve,reject){
          setTimeout(()=>{
            const error = true;
            if(!error){
            console.log("promise has been resolved")
            resolve()
            }
            else{
              console.log("promise has not been resolved")
              reject('sorry not fullfilled')
            }
          },2000);             
    })
   }
  func1().then(function(){
    console.log('thanks for resolving')
  }).catch(function(error){
     console.log('very bad bro Reason:'+ error)
  })
  
  