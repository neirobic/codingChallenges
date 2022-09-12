function likesV1(names) {
  /* (array of string) => string
  return a string that says:
  1. "no one likes this" if names array is empty
  2. "(names[0]) likes this" if length of names array is 1
  3. "(names[0]) and (names[1]) like this" if length of names array is 2
  4. "(names[0]), (names[1]) and (names[2]) like this"
  5. "(names[0]), (names[1]) and (length of names - 2) others like this"
  
  so...just some if statements? 1 to handle each case? 
  seems better than a loop cause the return strings have differences outisde of
  the expressions included (comma, 'and' conjunction)
  
  omg i could try a switch statement!!
  */
  
  switch (names.length) {
      case 0:
        return "no one likes this";
      case 1:
        return `${names[0]} likes this`;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default:
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
    
  
  
}

function likesV2(names) {
    /* (array of string) => string
    return a string that says:
    1. "no one likes this" if names array is empty
    2. "(names[0]) likes this" if length of names array is 1
    3. "(names[0]) and (names[1]) like this" if length of names array is 2
    4. "(names[0]), (names[1]) and (names[2]) like this"
    5. "(names[0]), (names[1]) and (length of names - 2) others like this"
    
    so...just some if statements? 1 to handle each case? 
    seems better than a loop cause the return strings have differences outisde of
    the expressions included (comma, 'and' conjunction)
    
    omg i could try a switch statement!!
    
    EDIT: apparently switch statements are quite, quite slow, and a simple if-statament would
    perform a lot better - https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than#6666246
    (as commented by user omark in the solutions section)
    */
    
    switch (names.length) {
        case 0:
          return "no one likes this";
        case 1:
          return `${names[0]} likes this`;
        case 2:
          return `${names[0]} and ${names[1]} like this`;
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
          return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
      
    
    
  }