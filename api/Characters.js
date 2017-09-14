import { fetchCharacterImageURI } from './CharacterImages';

// Credit: https://github.com/fabianchoxD/FsvMusic_React_Native/blob/bd8207d2b7c6153111cfb239c2659e09f53d4f9a/src/api-client.js
const URL_ALL = 'https://swapi.co/api/people/?format=json';
const URL_CODECHALLENGE = '../jsondata/CodeingChallengeCharacters.json';


function fetchCharacters(){
    var URL = URL_ALL
    //if (codechallenge && codechallege == "codechallenge") {URL = URL_CODECHALLENGE} else {URL = URL_ALL}
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.results)
        .then(results =>results.map(character=> {
            return {
                name: character.name,
								picture: fetchCharacterImageURI(character.name),
								mass: character.mass,
								height: character.height,
                gender: character.gender,
                movies: character.movies,
                url: character.url,
            }
        }))
}

export{ fetchCharacters }
