function warnTheSheep(queue) {
/* (array of str) => str
If the item at the last index is "wolf", return "Pls go away and stop eating my sheep".
Otherwise, find the index of "wolf" (let's call it wolfIndex) and return
"Oi! Sheep number (length of queue - (wolfIndex + 1))! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) => "Oi! Sheep number 1! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "sheep", "wolf"]) => "Pls go away and stop eating my sheep"
*/
  let wolfIndex = 0;
  for (let i = 0; i < queue.length; i++) {
    if(queue[i] === "wolf") {
      wolfIndex = i;      
    }
  }
  
  let sheepIndex = (queue.length - (wolfIndex + 1));
  
  if (wolfIndex == queue.length - 1) {
    return("Pls go away and stop eating my sheep") 
  }
  else {
    return(`Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`)
  }
  
  
}