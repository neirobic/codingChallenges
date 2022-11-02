function rowSumOddNumbers(n) {
/* (array) => number
given a triangle of consecutive odd numbers where the first row contains the first odd number counting from zero,
the second row contains the second and third odd numbers, the third row contains the fourth, fifth and sixth, 
calculate the sum of the numbers in the nth row of this triangle

rowSumOddNumbers(1) => 1
rowSumOddNumbers(2) => 8
rowSumOddNumbers(3) => 27
...wait a second...
*/
  return n**3;
}