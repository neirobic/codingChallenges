function stringEndsWithV1(str, ending){
  /* (str, str) => bool
    Return true if string str has string ending as its ending, false otherwise.
    
    solution('abc', 'bc') => true
    solution('abc', 'd') => false
    
    so we need to see if the last x characters of string str are string ending
  */
    //so we could...create a sub-string based off of str that's the same length as ending, and starts at the same place ending would start if ending is the ending of str
    let strEnding = '';  
    //by iterating through str starting at index str.length-ending-length, going until the end of str
    for (let i = str.length-ending.length; i < str.length; i++) {
      strEnding = strEnding + str[i];
    }
    //i don't see ppl re-assigning strings in for loops like this often, suspect it might be bad practice?? gotta look into it
    //and then compare that to ending ?
    
    return (strEnding === ending);
    
    
  }


function stringEndsWithV2(str, ending){
    /* (str, str) => bool
      Return true if string str has string ending as its ending, false otherwise.
      
      solution('abc', 'bc') => true
      solution('abc', 'd') => false
      
    */
    //omg i did a whoooole thing to figure this out the first time around, but turns out there's a string method to cover this exact problem!! Of course there is! oops
      return str.endsWith(ending);
    }