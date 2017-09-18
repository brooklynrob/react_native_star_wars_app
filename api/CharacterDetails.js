import { fetchCharacterImageURI } from './CharacterImages';

// this is an (function, immutable) way of normalizing a character's fields
// Note too that I've not yet implemented Flow -- but appreciate greatly
// the value of a type system to avoid stuff like this
function normalizeCharacter (character) {
  return newcharacter = {
    exception: character.exception,
    name: character.name || "No Name Retrieved",
    requested_name: character.requested_name,
    picture: character.picture,
    //To Do: Replace this with maybe values w/ Flow
    mass: character.mass || "No mass",
    height: character.height || "No height",
    gender: character.gender || "No gender",
    movie_urls: character.films,
    url: character.url || "No Character URL"
  };
}

// The following function is unused as of yet
function normalizeCharacters(characters) {
  return characters.map(function(character) {
    return normalizeCharacter(character);
  });
}

function checkCharacterForErrors (character, name) {
  // Hard Error - the API did not return what was expected
  // Handles coding challenge test requirement for when Obi-Wan can not be found due to bad URL
  if (character.detail) {
    return {
      exceptionStatus: "error",
      exceptions: [{
        exception_type: "error",
        // the API arror will return as the detail property on the JSON returned
        exception_message: "The API returned this error: \"" + character.detail + "\"."
      }]
    }
  // Soft "Error" - warning
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
    return {
      exception: checkCharacterForErrors(character, name),
      name: character.name,
      requested_name: name,
      picture: fetchCharacterImageURI(character.name),
      mass: character.mass,
      height: character.height,
      gender: character.gender,
      character_movie_urls: character.films,
      url: character.url,
    }
  })
  .then((character) => {
    return normalizeCharacter(character);
  })
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

export { fetchCharacterDetails }
