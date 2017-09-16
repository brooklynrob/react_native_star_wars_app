// URL for the StarWars api
const URL = 'https://swapi.co/api/people/?format=json';
// json file for the coding challenge
const coding_challenge_json_data = require('../jsondata/CodingChallengeCharacters.json');

var getCharacters = function () {
	return coding_challenge_json_data.characters
}

function fetchCharacters(searchType) {
		console.log ("The search type in characters.js is " + searchType);
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


export{ fetchCharacters }
