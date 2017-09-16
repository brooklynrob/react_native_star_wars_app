import { fetchCharacterImageURI } from './CharacterImages';

function normalizeCharacter (character) {
  return newcharacter = {
    exception: character.excpetion,
    name: character.name || "No Name Retrieved",
    requested_name: character.requested_name,
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

var checkCharacterForErrors = function (character, name) {
  // Handles coding challenge test requirement for when Obi-Wan can not be found due to bad URL
  if (character.detail) {
    return {
      exceptionStatus: "error",
      exceptions: [{
        exception_type: "error",
        exception_message: character.detail
      }]
    }
  // Handles coding challenge test requirement for when RD-D2 is requested by URL will produce C3-P0 data
  } else if (character.name != name) {
      return {
        exceptionStatus: "warning",
        exceptions: [{
          exception_type: "warning",
          exception_message: "Retrieved Name Does Not Match Requested Name"
        }]
      }
  } else {
    return {
      exceptionStatus: "none",
      exceptions: []
    }
  }
}


// Check for an error on the response -- "detail": "Not found" on Obi Won
// Put warning "Warning: The $character named was requested but the server returned the details for the $character. There may have been a problem with Character File
function fetchCharacterDetails(URL, name){
  return fetch(URL)
        .then(response => response.json())
        .then((character) => {
          //console.log ("Character returned from API is" + JSON.stringify(character));
          return {
              exception: checkCharacterForErrors(character, name),
              name: character.name,
              requested_name: name,
              picture: fetchCharacterImageURI(character.name),
              mass: character.mass,
              height: character.height,
              gender: character.gender,
              movies: character.films,
              url: character.url,
            }
          })
        //.then((character) => {
        //  return {
        //    normalizeCharacter(character)
        //  }
        //  })
        .catch((error) => {
          console.log("Character details could not be loaded and returned this error: " + error);
          return {
            error: true,
            error:[
              {
                error_severity: "error",
                error_message: "An error occured in the response from the server"
              }
            ]
          }
        });
    }

export { fetchCharacterDetails, normalizeCharacter, normalizeCharacters }
