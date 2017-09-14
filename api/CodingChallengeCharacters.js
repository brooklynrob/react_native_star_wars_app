//import { fetchCharacterImage } from './CharacterImages';
// Credit: https://github.com/fabianchoxD/FsvMusic_React_Native/blob/bd8207d2b7c6153111cfb239c2659e09f53d4f9a/src/api-client.js
const data = require('../jsondata/CodingChallengeCharacters.json');

function updateCharacter (character) {
  newcharacter = {
    name:  character.name || "No Name",
    url: character.url ||  "No URL specified",
  };
  return newcharacter
}


function fetchCodingChallengeCharacters(){
  return data
}

export{ fetchCodingChallengeCharacters }
