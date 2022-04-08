var minDeletionSize = function(A) {
    let counter = 0;
    for(let i = 0; i < A[0].length; i++) {
        for(let j = 1; j < A.length; j++) {
            if(A[j][i] < A[j-1][i]) {
               console.log(counter++) ;
                break;
            }
        }
    }
     console.log(counter);
};
//l6 Q6