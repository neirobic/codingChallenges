var min = function(list){
    /* (array of number) => number
      return smallest number in the list
    */  
        let minValue = list[0];
      
        for (let i = 0; i < list.length; i++) {
          if (list[i] < minValue) {
            minValue = list[i]
          }
        }
        return minValue;
    }
    
    var max = function(list){
    /* (array of number) => number
      return largest number in the list
    */  
        let maxValue = list[0];
        
        for (let i = 0; i < list.length; i++) {
          if (list[i] > maxValue) {
            maxValue = list[i];
          }
        }
        return maxValue;
    }