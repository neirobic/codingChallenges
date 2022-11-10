function duplicateEncode(word){
/* (string) => string
word is a string. Ignoring capitalization, convert it to a new string
where each character is '(' for chars that only appear once in word,
')' for chars that appear more than once.

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
"1 23 abcdEe" => "()(()(((())"
*/
//ok so first we turn word to lowercase so our encodings are not case-sensitive 
  let wordArray = word.toLowerCase().split('');
//then...we need to detect whether each item occurs more than once, and create a new array based on that
  let parenthesesArray = wordArray.map(letter => wordArray.indexOf(letter) === wordArray.lastIndexOf(letter) ? '(': ')')
/*wordArray.indexOf(letter) returns the first occurence of letter on our array, 
wordArray.lastIndexOf(letter) returns the last occurence of letter in our array.
If they are the same, then letter only occurs once! Otherwise, it occurs multiple times */

//turning our array of parentheses into a string  
  let parenthesesString = parenthesesArray.join('');
  
  return parenthesesString;

}