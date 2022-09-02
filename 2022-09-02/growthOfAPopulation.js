function nbYear(p0, percent, aug, p) {
    /* (int, float, int, int) => int
    
    check how many years ('n') a population with initial population size 'p0', % growth 'percent',
    immigration number 'aug' will take to reach population size 'p'
    */
    //so I have to...do pn = pn * ((percent*.01)+1) + aug while pn > p, with initial pn = p0
    //and then n is the counter for how many times i had to do that! so...while loop?
    //oop gotta round down to nearest whole number cause no such thing as .5 of a person
    
    let pn = p0;
    let n = 0;
    
    while  (pn < p) {
      pn = Math.floor( pn * ( (percent*.01) + 1 ) + aug);   
      n ++;
    }
    return n;
  
  }