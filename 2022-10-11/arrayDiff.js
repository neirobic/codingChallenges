function arrayDiff(a, b) {
    /* (array, array) => array
      
      subtract all instances of each item in array b from array a. 
      return the result
      
      arrayDiff([1,2],[1]) == [2]
      arrayDiff([1,2,2,2,3],[2]) == [1,3]
    */
      return a.filter(value => !b.includes(value));
    }