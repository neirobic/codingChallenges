function reverseWords(str){
/* (string) => string
  str is a string with several different words.
  Return the words with their order reversed

reverseWords("You are a toy car") => "car toy a are You"
reverseWords("Cecilia cecilia cecilia cecilia) => "cecilia cecilia cecilia Cecilia"
reverseWords("The greatest victory is that which requires no battle") => "battle no requires which that is victory greatest The")
reverseWords("a ") => ???
*/
  //create array based on string, using spaces as the splitting points
  let strArray = str.split(" ");
  //reverse order of items in array
  strArray.reverse();
  //convert array back to a string
  let strReversed = strArray.join(' ');
  //return string with order of words reversed
  return strReversed;
  }