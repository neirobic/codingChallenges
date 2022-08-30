function betterThanAverage(classPoints, yourPoints) {
    // calculate mean of values in classPoints array, compare against yourPoints
    //true if yourPoints > classPoints, false otherwise
    let classAverage = classPoints.reduce( (a, b) => a + b, 0)/classPoints.length;
    return (yourPoints > classAverage)
  }