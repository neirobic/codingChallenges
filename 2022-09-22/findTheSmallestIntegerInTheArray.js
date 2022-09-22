class SmallestIntegerFinderv1 {
  findSmallestInt(args) {
    /* (array of numbers) => number
    man i bet there's just like...a method for this...
    */
    let smallestInteger = args[0];
    
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallestInteger) {
        smallestInteger = args[i];
      }
    }
    
    return smallestInteger;
    
  }
}

class SmallestIntegerFinderV2 {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }