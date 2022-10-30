function countBy(x, n) {
 /* (number, number) => number
  return first n multiples of x.
  precondition: n and x are positive numbers greater than zero.
  
  countBy(1,10) => [1,2,3,4,5,6,7,8,9,10]
  countBy(2,6) => [2,4,6,8,10,12]
  countBy(3,8) => [3,6,9,12,15,18,21,24]
 */
  let z = [];
  
  for (let i = 0; i < n; i++) {
    z[i] = x + (i*x);
  }

  return z;
}