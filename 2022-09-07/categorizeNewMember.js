function openOrSenior(data){
    /* (array of array of num) => array of str
    returns array of str 'categoryList', with a value for each array in 'data' array.
    If age >= 55 and handicap > 7, value is 'Senior'. Otherwise, value is 'Open'. 
    */
      let categoryList = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
          categoryList.push('Senior');
        } else {
          categoryList.push('Open');
        }
      }
      return categoryList;
    
    }