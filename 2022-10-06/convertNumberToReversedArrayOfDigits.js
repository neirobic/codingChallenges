function digitizeV1(n) {
  /* (number) => array
    return reversed digits of n as an array
  
  */
  //create a variable that stores n converted to a string 
  let nStr = n.toString();
  //create a variable to store the final result - array of digits of n, reversed
  let nArrayReversed = [];
  //create a variable to count indexes of nArrayReversed, starting from 0
  let nArrayIndexCounter = 0;
  
  //loop through nStr from end to beginning, storing those values in nArrayReversed
  for (let i = nStr.length - 1; i >= 0; i--) {
    nArrayReversed[nArrayIndexCounter] = nStr[i];
    nArrayIndexCounter++;
  }
  //convert items in nArrayReversed from strings to numbers
  for (let i = 0; i < nArrayReversed.length; i++) {
    nArrayReversed[i] = parseInt(nArrayReversed[i]);
  }
  
  return nArrayReversed;
  //this is so ugly...sorry, everyone...
}

function digitizeV2(n) {
    /* (number) => array of number
    return array containing the digits of n in reverse order
      
      35231 => [1,3,2,5,3]
      0 => [0]
    */
  //1. turn number into string
    let strNum = n.toString();
  //2. split string into characters, creating array with each character as an item, with no separator (that’s what the ‘’ is for, default separator is a comma)
    let arrayStrNum = strNum.split('');
  //3. Reverse array containing digits of n as strings
    let arrayStrNumReversed = arrayStrNum.reverse();
  //4. Turn strings inside array arrayStrNum back to map
    let arrayNumReversed = arrayStrNumReversed.map(str => Number(str));
  //5. return array containing reversed digits of n
    return arrayNumReversed;
  }