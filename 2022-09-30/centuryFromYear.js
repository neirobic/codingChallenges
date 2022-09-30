function century(year) {
    /* (number) => number
    "given a century, return the year it is in"
    divide year by 100, round up result
    
    1705 => 18
    1900 => 19
    1601 => 17
    2000 => 20
    */
    return Math.ceil(year/100);
  }