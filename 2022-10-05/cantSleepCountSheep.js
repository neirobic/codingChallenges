var countSheep = function (num){
    //your code here
    /* so they want us to count up to the given int, and for each
    int btw 0 and that given int, they want us to accumulate "(num) sheep..."
    to a string. at the very end, we return the string. use those special
    backtick strings?
    */
    sheepCounter = ``;
    
    for (let i = 1; i <= num; i++) {
      sheepCounter+=`${i} sheep...`;
    }
    
    return sheepCounter;
  }