function findNeedleV1(haystack) {
    /* (array of str) => str
    search array for location of str "needle",
    return a str announcing the index at which "needle" was found
    */
    needlePosition = 0;
      for (let i = 0; haystack[i] !== "needle"; i++) {
        needlePosition++;
      }
    
    return `found the needle at position ${needlePosition}`
  }

  function findNeedleV2(haystack) {
    /*maybe i should go learn abt array methods before i keep doing these haha*/
    return "found the needle at position "+ haystack.indexOf("needle");
  }