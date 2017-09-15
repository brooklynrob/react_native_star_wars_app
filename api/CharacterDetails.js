import { fetchCharacterImageURI } from './CharacterImages';

function normalizeCharacter (character) {
  return newcharacter = {
    api_error: character.api_error,
    requested_name: character.requested_name,
    name:  character.name || "No Name",
    picture: character.picture,
    mass: character.mass || "No mass",
    height: character.height || "No height",
    gender: character.gender || "No gender",
    movies: character.movies || [],
    url: character.url || "No Character URL"
  };
}

function normalizeCharacters(characters) {
  return characters.map(function(character) {
    return normalizeCharacter(character);
  });
}

function checkNamesMatch (requestedName, retrievedName) {
  if (requestedName != retrievedName) {
    return "Requested name did not match retrieved name"
  } else {
    return ""
  }
}








// Check for an error on the response -- "detail": "Not found" on Obi Won
// Put warning "Warning: The $character named was requested but the server returned the details for the $character. There may have been a problem with Character File
function fetchCharacterDetails(URL, name){
  return fetch(URL)
        .then(response => response.json())
        .then((character) => {
          return {
              api_error: {
                name: checkNamesMatch(name, character.name),
              },
              name: character.name,
              requested_name: name,
              picture: fetchCharacterImageURI(character.name),
              mass: character.mass,
              height: character.height,
              gender: character.gender,
              movies: character.movies,
              url: character.url,
            }
          })
        .catch((error) => {
          console.error(error);
        });
    }


function fetchCharacters() {
      return fetch(URL)
            .then(response => response.json())
            .then(data => data.results)
            .then(results =>results.map(character=> {
                return {
                    name: character.name,
                    url: character.url,
                }
            }))
    }


export { fetchCharacterDetails, normalizeCharacter, normalizeCharacters }
