function solution(number){
    /* (int) => int
    (does it matter that it's an int for js?? should i just specify 'number'?)
    return sum of numbers smaller than 'number' parameter that are divisible by 3 or 5 (or both)
    i.e. count up to 'number', check for numbers for which %3 or %5 == 0, add those numbers
    */
      let multiplesAggregator = 0;
      
      for ( let i = 0; i < number; i++) {
        if ( i % 3 == 0 || i % 5 == 0) {
          multiplesAggregator += i;
        }  
      }
      
      return multiplesAggregator;
    }