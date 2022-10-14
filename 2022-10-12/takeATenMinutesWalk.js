function isValidWalk(walk) {
    /* (array of string) => bool
      return true if length of walk is 10 and every item in walk is 
      part of a pair (pairs being (n,s) and (e,w).
      
      precondition: array length > 0 and only contains strs with value 'n','s', 'e' or 'w'
    
      isValidWalk(['n','w','e','s','s','n','w','e','e','w']) // true
      isValidWalk(['n','s']) // false
      isValidWalk(['s','s','s','s','s','n','n','n','n','n']) //true
      isValidWalk(['e','e','s','n','n','e','s','s','w','w']) //false
    
    */
      //check if array length is not 10
      if (walk.length != 10) {
        return false;
      }
      
      //create variables to store value of occurenes of 'n', 's', 'e', 'w':
      let nCount = 0;
      let sCount = 0;
      let eCount = 0;
      let wCount = 0;
      
      //count those occurences
      for (let i = 0; i < walk.length; i++) {
        if (walk[i] == 'n') {
          nCount++;
        }
        if (walk[i] == 's') {
          sCount++;
        }
        if (walk[i] == 'e') {
          eCount++;
        }
        if (walk[i] == 'w') {
          wCount++;
        }
      }
      
      //compare occurences 
      
      return (nCount == sCount && eCount == wCount);
    }