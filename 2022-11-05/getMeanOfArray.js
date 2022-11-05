function getAverage(marks){
/* (array of number) => number
marks is an array containing marks.
return the downward rounded average of the marks array

getAverage([40,50,60]) => 50;
getAverage([80.333, 88.2, 97.5]) => 88
*/
  let marksSum = marks.reduce((sum, mark) => sum += mark, 0);
  let marksAverage = marksSum/marks.length;
  let marksAverageRoundedDown = Math.floor(marksAverage);
  
  return marksAverageRoundedDown;
}