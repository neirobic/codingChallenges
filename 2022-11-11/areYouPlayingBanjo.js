function areYouPlayingBanjo(name) {
/* (string) => string
name is a name. if name starts with R, return name + "plays banjo". 
Otherwise, return name + "does not play banjo"

("benji") => "benji does not play banjo"
("roderick") => "roderick plays banjo"
("12345") => "12345 does not play banjo"
("Roberta") => "Roberta plays banjo"

*/
  let nameLowerCase = name.toLowerCase();
  let playsBanjo = nameLowerCase[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`;

  return playsBanjo;

}