function Ghost() {
/*Create a function Ghost
Ghost objects are instantiated without any arguments,
and have "color" as their only property, with color
being randomly assinged one of 4 values: "white", "yellow", "purple" or "red"

ghost1 = new Ghost();
ghost1.color = ("white" or "yellow" or "purple" or "red")
*/

let randomizer = Math.random();

if (randomizer < 0.25) {
    this.color = "white";
} else if (randomizer < 0.5) {
    this.color = "yellow";
} else if (randomizer < 0.75) {
    this.color = "purple";
} else if (randomizer < 1) {
    this.color = "red";
}


}


//check that this is working - create a bunch of ghost objects, check their colors

function ghostChecker() {
/* returns array ghostColorsCounter indicating color distribution of 150 randomly created Ghost objects,
    where each index in the array indicates number of ghost objects with color "white", "yellow", "purple" and "red", respectively
*/
    let ghosts = []
    let ghostColors = [];
    let ghostColorsCounter = [0, 0, 0, 0,];

    for (let i = 0; i < 1000; i++){
        ghosts[i] = new Ghost();
        ghostColors[i] = ghosts[i].color;
        ghostColors[i] === "white" ? ghostColorsCounter[0]++ : ghostColors[i] === "yellow" ? ghostColorsCounter[1]++ : ghostColors[i] === "purple" ? ghostColorsCounter[2]++ : ghostColorsCounter[3]++;    
    }



    return (ghostColorsCounter);
}

//then the thing to do to properly check this is create a function that runs ghostChecker a few times (is this right?? is running a thing that creates 150 things randomly say 3 times different than running a thing that creates 450 things randomly? i don't think so??)
//and check that the sum of values of items in the array is equal to 150, and that none of the items equals zero 
//(what about for the cases where one of the items does equal zero? how would we handle those?)

//but anyway it's a sunday and i don't properly know how to do that yet so im gonna go take a nap and enjoy my life. bye!