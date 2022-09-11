function filter_list(l) {
  // Return a new array with the strings filtered out
  let lInts = [];
  for (let i = 0; i < l.length; i++){
    if (typeof l[i] !== "string" ) {
      lInts.push(l[i]);
    }
  }
  
  return lInts;
}