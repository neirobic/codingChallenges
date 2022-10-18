const reverseSeq = n => {
  
    let reversedSeq = [];
    
    for (let i = 0; i < n; i++) {
      reversedSeq[i] = n - i;
    }
    
    return reversedSeq;
  };