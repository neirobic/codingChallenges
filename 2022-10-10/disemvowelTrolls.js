function disemvowel(str) {
    /* (string) => string
      return new string based on str, but with all vowels removed.
      
      disemvowel("This website is for losers LOL!") => "Ths wbst s fr lsrs LL"
      disemvowel("Eat my shorts!") => "t m shrts!"
      disemvowel("ur mom") => "r mm"
    
      "disemvowel trolls" is such a funny expression!! ty osuushi
    */
      
      let disemStr = '';
      let vowels = 'aeiouAEIOU';
      
      for (let i = 0; i < str.length; i++) {
        if (! vowels.includes(str[i])){
            disemStr += str[i];
            }
      }
      
      return disemStr;
    }