const binaryArrayToNumber = arr => {
/* (array) ==> number
treat an array as a binary value, convert it to its equivalent base 10 integer number.

binaryArrayToNumber([0,0,0,1]) ==> 1
binaryArrayToNumber([0, 0, 1, 0]) ==> 2
binaryArrayToNumber([1, 1, 1, 1]) ==> 15
*/
  //so...reverse the array, multiply each item by two to the power of the item's index, sum that?
  //reverse array
  let arrReversed = [...arr].reverse();
  //create variable to store converted binary value
  let toNumber = 0;
  //sum each item in array multiplied by two to the power of the item's index in array
  for (let i = 0; i < arrReversed.length; i++) {
    toNumber += arrReversed[i]*Math.pow(2,i);
  }
  //done!
  return toNumber;
  
};

/*turns out you can also just do 
return parseInt(arr.join(''), 2)
which takes advantage of parseInt's optional radix argument
*/