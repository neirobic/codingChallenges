function friend(friends){
    //your code here
    let isFriend = [];
    let isFriendIndexCounter = 0;
    for (let i = 0; i < friends.length; i++){
      if ((friends[i]).length == 4){
        isFriend[isFriendIndexCounter] = friends[i];
        isFriendIndexCounter ++;
      }
    }
    return isFriend;
  }