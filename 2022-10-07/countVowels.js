function countVowels(str) {
    /* (string) => number
      return the count of vowels in a given string.
      
       getCount('banana') => 3
       getCount('I like banana') => 6
       getCount('Why do you like banana') => 8
       getCount('aeiou') => 5
       getCount('cdfgy') => 0
    
    */
      let vowelCount = 0;
      let vowels = 'aeiou'
      
      for(let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          vowelCount++;
        }
        
      }
      
      return vowelCount;
    }