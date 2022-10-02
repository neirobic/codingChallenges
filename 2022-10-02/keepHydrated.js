function litres(time) {
    /* (number) => number
      calculate number of liters nathan will drink in time amount of hours of cycling,
      given that he drinks .5 liters per hour of cycling
      i.e. time divided by 2, rounded down
    */
    return Math.floor(time/2);
  }