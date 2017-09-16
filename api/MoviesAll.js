import { fetchMovieImageURI } from './MovieImages';

// Credit: https://github.com/fabianchoxD/FsvMusic_React_Native/blob/bd8207d2b7c6153111cfb239c2659e09f53d4f9a/src/api-client.js
const URL = 'https://swapi.co/api/films/?format=json';

function fetchMoviesAll(){
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.results)
        .then(results =>results.map(movie=> {
            return {
                title: movie.title,
								//picture: fetchMovieImageURI(movie.title),
								release_date: movie.release_date,
            }
        }))
}

export{ fetchMoviesAll }
