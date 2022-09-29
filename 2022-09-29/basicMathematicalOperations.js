function basicOp(operation, value1, value2)
{
  /* (str, number, number) => number
  return result of arithmetic operation between value1 and value2.
  arithmetic operation is determined by value of 'operation' variable,
  with 4 possible cases: '+' for addition, '-' for subtraction,
  '*' for multiplication and '/' for division.
  
  ('+', 4, 7) => 11
  ('-', 15, 18) => -3
  ('*', 5, 5) => 25
  ('/', 49, 7) => 7
  
  */
  switch(operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
  }
}