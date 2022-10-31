function isPangram(string){
/* (string) => bool
return true if string contains each of the 26 letters of the alphabet, false otherwise.

isPangram("The quick brown fox jumps over the lazy dog.") => true
isPangram("This is not a pangram.") => false
isPangram("AbC dddeF GHijJKL MNopqRS TUvwx yyyyyy z ; )'") => true

happy halloween!!
*/
  const stringLowerCase = string.toLowerCase();
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let letterCount = 0;
  
  for (let i = 0; i < alphabet.length; i++) {
    if (stringLowerCase.includes(alphabet[i])){
          letterCount++;
        }
  }
  return (letterCount == 26)
}