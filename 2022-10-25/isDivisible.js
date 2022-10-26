function isDivisibleV1(n, x, y) {
    /* (number, number, number) => bool
    n, x and y are all positive integers. 
    Return true if n is divisible by x and y, false otherwise.
    */
      return (n % y === 0) && (n % x === 0);
      
    }

    function isDivisibleV2(n, x, y) {
        /* n, x and y are positive, non-zero numbers.
        Returns true if n is divisible by x and y, false otherwise
        */
          
          return (n % x !== 0 ? false : n % y !== 0 ? false : true)
        }