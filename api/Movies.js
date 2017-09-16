import { fetchMovieDetails } from './MovieDetails';

function toArray (str) {
	return str.split(',')
}

let fetchMovies = function(movieURLsAsString) {
	  return new Promise(function(resolve, reject) {
			let movies = toArray(movieURLsAsString).map(fetchMovieDetails())
			console.log ("The movies now are " + movies);
	    if (movies) {
	      resolve(movies);
	    } else {
	      reject(Error("It broke"));
	    }
	  });
	}



export{ fetchMovies }
