function removeChar(str){
  /* (string) => string
    return a string identical to str except with first and last characters removed
    removeChar('pebbles') => 'ebble'
    removeChar('omnibus') => 'mnibu'
 */
   //declare array to store string characters as elements
   let arrStr = [];
   //iterate through str, storing each character as an element in arrStr
   for (let i = 0; i < str.length; i++) {
     arrStr[i] = str[i];
   }
   //remove last element of arrStr
   arrStr.pop();
   //remove first element of arrStr
   arrStr.shift();
   
   let strFirstLastRemoved = arrStr.join('');
   
   return strFirstLastRemoved;
 };

function removeCharV2(str){
 
    return str.slice(1,-1);
  
  };