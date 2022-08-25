function countPositivesSumNegatives(input) {
    let posiNegaSums = [0,0];
    let emptyArray = [];
    
    if (input == null || input.length == 0) {
      return emptyArray;
    }
    
    else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          posiNegaSums[0] ++;
        }
        else if (input[i] < 0) {
          posiNegaSums[1] += input[i];
        }
      } 
      return posiNegaSums;
    }
    
  }