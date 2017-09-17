import { fetchMovieImageURI } from './MovieImages';
const URL = 'https://swapi.co/api/films/?format=json';

function fetchMoviesAll(){
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.results)
    .then(results =>results.map(movie=> {
      return {
        title: movie.title,
        release_date: movie.release_date,
        director: movie.director,
        //picture: fetchMovieImageURI(movie.title),
      }
    }))
}

export{ fetchMoviesAll }
