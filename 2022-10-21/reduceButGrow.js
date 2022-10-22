function grow(x){
    /* (array of number) => number
     'x' is a given array. 
     Return product of all the numbers in x.
    */
     return x.reduce((prev, cur) => prev * cur)
   }