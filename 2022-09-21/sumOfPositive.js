function positiveSum(arr) {
    // (array of num) => num
   // return sum of all positive elements of array
     sum = 0;
     
     arr.forEach( n => {
       if (n > 0) {
         sum += n;
       }
     })
     
     return sum;
   }