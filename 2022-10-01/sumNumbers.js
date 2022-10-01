// Sum Numbers
function sumV1 (numbers) {
    "use strict";
    let numbersSum = 0;
    for (let i = 0; i < numbers.length; i++) {
      numbersSum += numbers[i];
    }
  return numbersSum;
    
    
};

function sum (numbers) {
    "use strict";
    return numbers.reduce((a,b)=>a+b,0);
    
};