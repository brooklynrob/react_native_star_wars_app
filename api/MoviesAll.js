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
  			picture: fetchMovieImageURI(movie.title),
  			director: movie.director,
  			producer: movie.producer,
      }
    }))
    .catch((error)=>{
      console.log ("Error in fetchMoviesAll " + error);
    })
}

export{ fetchMoviesAll }
