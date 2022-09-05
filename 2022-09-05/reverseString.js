function reverseString(str){
    /* (str) => str
    returns original string, reversed
    umm  strings are immutable, so i could pass through the string backwards,
    storing each value in an array, and then convert that array to a string??
    sounds kinda ass-backwards but let's try it!
    */
      if ( str.length === 0 ){
        return str;
      }
      
      else {
      let reversedStrArray = [];
      let arrayIndexer = 0;
      //adds each letter of str to reversedStrArray, starting w/ last letter and ending w/ first one
      for (let i = str.length-1; i >= 0; i--) {
        reversedStrArray[arrayIndexer] = str[i];
        arrayIndexer++;
      }
      //turns reversedStrArray into a string
      let reversedStr = reversedStrArray.reduce((a,b) => a + b);
      return reversedStr;
      }
    }
    