function getSum( a,b )
{/* given two integers a and b, return the sum of all integers between a and b (inclusive)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/
  let smaller = (a < b ? a : b);
  let bigger = (a < b ? b : a);
  let sum = 0;
  
  for (let i = smaller; i <= bigger; i++){
    sum += i;
  }
  
  return sum;
}