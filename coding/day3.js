function bouncer(arr) {
    let Array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) Array.push(arr[i]);
      }
      return Array;
    }
    
    console.log(bouncer([7, "ate", "", false, 9]));