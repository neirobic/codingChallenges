function minMax(arr){
/* (array of number) => array of number

given array arr, return array based off of arr containing only two items:
arr's biggest number and smallest number
*/
  let arrSorted = [...arr].sort((a,b) => a-b);
  let arrMinMax = [];
  arrMinMax[0] = arrSorted[0];
  arrMinMax[1] = arrSorted[arrSorted.length-1];
  
  return arrMinMax;
}