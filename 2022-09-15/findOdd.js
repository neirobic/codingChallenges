function findOdd(array) {
    /*(array of int) => int
    find the one element that appears an odd number of times
    so, first, we should sort the array, right?
    then go through each element of it
    we could have a counter (which = 1 because we're counting from the 1st element, i.e., when we start or re-start counting the initial number of elements that has that value is 1):
    > if next element has same value as current one, add 1 to the counter
    > if the next element has a different value than current one, (i.e. we've gone through all elements that share a particular value)
        we check the counter and:
        > if counter is odd, return current element
        > if counter is even, reset counter to 0, keep counting
    */  
    let elementCounter = 1;
    array.sort();
    for (let i=0; i < array.length; i ++){
      if (array[i] == array[i +1]) {
        elementCounter++;
      }
      else {
        if (elementCounter % 2 != 0) {
          return array[i];
        }
        else {
          elementCounter = 1;
        }
      }
    }    
  }