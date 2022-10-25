function findAverage(array) {
    // your code here
    let sum = 0;
    let averages;
    
    array.forEach(item => sum += item)
    
    array.length == 0 ? averages = 0 : averages = sum/array.length;
    
    return averages;
  }