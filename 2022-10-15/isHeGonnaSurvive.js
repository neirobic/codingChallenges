function hero(bullets, dragons){
    /* (number, number) => bool
      hero is fighting 'dragons' number of dragons with 'bullets' number of bullets, 
      each dragon takes 2 bullets to defeat.
      will the hero be able to defeat the given number of dragons with the given number of bullets?
      
      return true if bullets/2 >= dragons, false otherwise
    
      precondition: dragons and bullets are both integer numbers.
      
      hero(2,4)  //false
      hero(17,3) //true
      hero(9,0)  //true
      hero(0,9)  //false
    */
      return (bullets/2>=dragons);
    }