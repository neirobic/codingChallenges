function lovefunc(flower1, flower2){
    /* (number, number) => bool
       return true if one of the arguments is even and the other is odd.
       Otherwise, return false.
       
      lovefunc(1,4) => true
      lovefunc(5,5) => false
      lovefunc(12,7) => true
      lovefunc(8,4) => false
      
      it's an exclusive or (XOR) between two possible cases (flower1 even flower2 odd,
      flower1 odd flower2 even), so I could just do an if for each case, right?
    */
    if (flower1 % 2 === 0 && flower2 % 2 === 1 ) {
      return true;
    }
    if (flower1 % 2 === 1 && flower2 % 2 === 0) {
      return true;
    }
    
    return false;
  }