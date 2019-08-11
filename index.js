function dwarfRollCall(dwarves) {
  
  let newArray = [];
  
 for(let i = 0; i < dwarves.length; i++) {

      newArray.push(`${i + 1 + "."} ${dwarves[i]} `);
   }
   
   return newArray.join('');

}




function summonCaptainPlanet(planeteerCalls){
  
  for(let i = 0; i < planeteerCalls.length; i++){
    
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  
  return planeteerCalls;
}



function longPlaneteerCalls(words) {
  
  for (let word of words) {
    if (word.length > 4){
      return true;
    }
  }
  return false;
}




function findTheCheese (foods) {
  
  const cheeses = ['cheddar', 'gouda', 'camembert'];
  
  for (let cheese of foods) {
    if (cheeses.includes(cheese)) {
      return cheese
    }
  }
  return 'no cheese!';
}







