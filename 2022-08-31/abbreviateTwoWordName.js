function abbrevName(name){
    //converts a name into initials. String is two words with one space between them
    //first initial is going to be name at index zero, second initial is going to be the letter right after the newline character
      
      //first letter
      let firstnameInitial = name[0].toUpperCase();
      let lastnameInitial = '';
      for(let i = 0; i < name.length; i++) {
        if(name[i]===" "){
          lastnameInitial = name[i+1].toUpperCase()
        }
      }
      
      return (firstnameInitial+"."+lastnameInitial);
    }