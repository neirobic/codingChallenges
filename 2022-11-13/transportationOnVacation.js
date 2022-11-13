function rentalCarCost(d) {
/* (number) => number
  d is the number of days you're renting a car for.
  return the total cost, considering a daily rate of $40/day
  with a discount of $20 off your total if d >= 3,
  or $50 off your total if d >= 7
*/
  let totalCost = d*40;
  
  if (d >= 3 && d < 7) {
    totalCost -= 20;
  }
  else if (d >= 7) {
    totalCost -= 50;
  }
  
  return totalCost;
  
}