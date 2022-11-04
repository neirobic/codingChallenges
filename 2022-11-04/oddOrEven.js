function oddOrEven(array) {
/* (array) => string
given an array of integers, return "odd" if the sum of its elements is odd, "even" if the sum is even.

oddOrEven([0]) => "even"
oddOrEven([0,1,4]) => "odd"
oddOrEven([0, -1, 5]) => "even"
*/
  let sum = array.reduce((total, current) => total + current, 0);
  return(sum % 2 == 0 ? "even" : "odd");
  
}