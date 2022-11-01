function sumStrings(a,b) { 
/* (string, string) => number
a and b are strings. Return sum of a and b
as numbers (so, return sum of a and b if a and b were numbers)
*/
  return(String(BigInt(a) + BigInt(b)));
}