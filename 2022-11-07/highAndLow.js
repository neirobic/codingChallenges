function highAndLow(numbers){
/* (array of numbers) ==> string
numbers is an array of numbers. 
return biggest number in array and smallest number in array as a string separated by a space.

highAndLow("1 2 3 4 5"); ==> "5 1"
highAndLow("1 2 -3 4 5"); ==> "5 -3"
highAndLow("1 9 3 4 -5"); ==> "9 -5"
*/
  let numbersArray = numbers.split(' ');
  
  let max = Math.max(...numbersArray);
  let min = Math.min(...numbersArray);
  return (`${max} ${min}`);
  
}