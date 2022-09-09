function printerError(s) {
    /* (str) => str
    returns error rat of the printer as a string - '(number of errors)/(length of control string)'
    so the second bit is super easy, just s.length
    first bit is just checking which elements in string 's' are outside of the legal letters
    'abcdefghijklm'. right?
    */
    let errorCounter = 0;
    let legalCharacters = 'abcdefghijklm';
    
    for (let i = 0; i < s.length; i++) {
      if (!(legalCharacters.includes(s[i]))) {
            errorCounter ++;
            } 
      }
    return errorCounter + '/' + s.length;
    
}