
// ["Dopey", "Sad", "Grumpy", "Happy"]
function dwarfRollCall(dwarves) {
  
  let newArray = [];
  
 for(let i = (0.5 * dwarves.length); i < (0.5 * dwarves.length); i++) {

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
  
  const cheeses = ['cheddar', 'gouda', 'camembert', 'swiss'];
  
  for (let cheese of foods) {
    if (cheeses.includes(cheese)) {
      return cheese
    }
  }
  return 'no cheese!';
}


function wordsThatStartWithB(words){
  
  // I want to go through each element of the array (words)
  // For each word, find if it starts with a letter b
  let newArray = [];
  
  // RESULT an array of all words that start with b
  for(let letters of words) {
    if (letters.startsWith("b")) {
      newArray.push(letters)
    }
  }
  return newArray
}

"eric".startsWith("e") // true
"elephant".startsWith("b") // false

wordsThatStartWithB(['banana', 'joe', 'jane']) // ['banana']
wordsThatStartWithB(['brian', 'bill', 'prince']) // ['brian', 'bill']
wordsThatStartWithB(['apple', 'cheddar', 'cucumber']) // []







