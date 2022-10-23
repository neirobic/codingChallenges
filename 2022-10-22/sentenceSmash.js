function smash (words) {
    /* (array of string) => string
      'words' is a given array of words. return all words, 'smashed' into a sentence,
      with no leading or trailing spaces.
      
      smash(['hello', 'world', 'this', 'is', 'great'])  =>  'hello world this is great'
    */
      
      //easy-peasy way to do it is
      //return words.join(' ')
      
      //but without methods, it'd be...
      
      let wordsSmashed = '';
      
      for (let i = 0; i < words.length; i++) {
        if (i == words.length - 1) {
          wordsSmashed += words[i];
        }
        else {
          wordsSmashed += (words[i] + ' ')
        }
      }