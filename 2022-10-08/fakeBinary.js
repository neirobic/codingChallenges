function fakeBin(x){
    /* (string of digits) => string of digits
    
      Create a new string by replacing any digit of x smaller than 5 with '0', 
      any digit of x bigger than 5 with '1'. 
      Return that string.
    
      fakeBin('12345') => '00001'
      fakeBin('92634154') => '10100010'
      fakeBin('7') => '1'
    */
      fakeBinArray = [];
      
      for (let i = 0; i < x.length; i++) {
        if (x[i] >= 5) {
          fakeBinArray[i] = '1'
        }
    
        else {
          fakeBinArray[i] = '0'
        }
      }
      
      fakeBinStr = fakeBinArray.join('');
      
      return fakeBinStr;
    }