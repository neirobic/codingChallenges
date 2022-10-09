function squareSumV1(numbers){
    /* (array of numbers) -> number 
    square each number in the array (i.e. each element of the array),
    return sum of squared array elements 
    "For example, for [1, 2, 2] it should return 9 
    because 1^2 + 2^2 + 2^2 = 9."*/
      
      let numbersSquared = [];
      let numbersSquaredSum = 0;
      
      for (let i=0; i < numbers.length; i++){
        numbersSquared[i] = numbers[i]**2;
        numbersSquaredSum += numbersSquared[i];
      }
      return(numbersSquaredSum);
      
    
    }

function squareSumV2(numbers){
    /* (array of numbers) -> number
      square each number in the array (i.e. each element in array),
      then return sum of all numbers in array.
      "For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9."
    */
    let numbersSquared = [];
    let numbersSquaredSum = 0;
      for (let i = 0; i < numbers.length; i++) {
        numbersSquared[i] = numbers[i]**2;
        numbersSquaredSum += numbersSquared[i];
      }
      return numbersSquaredSum;
  }