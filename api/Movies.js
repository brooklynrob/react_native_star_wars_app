import { fetchMovieImageURI } from './MovieImages';

// this function returns the details of a single film
// based on the
const getFilmDetails = async (movie_url) => {
		movie_url_to_search = movie_url + "?format=json"
		//console.log ("URL to retrive is " + movie_url_to_search);
		const data = (await fetch(movie_url_to_search))
		//console.log ("data from fetch is " + JSON.stringify(data))
		const dataJson = (await (data.json()))
		//console.log ("dataJson is " + JSON.stringify(dataJson))
		const movie =  {
			title: dataJson.title,
			release_date: dataJson.release_date,
			picture: fetchMovieImageURI(dataJson.title),
			director: dataJson.director,
			producer: dataJson.producer,
		}
		return movie;
	}



const returnMovies = async (movie_urls) => {
    const movies = await (movie_urls.map((movie_url) =>
			getFilmDetails (movie_url)))
  	// console.log("The movies are " + movies);
		return Promise.all(movies);
}

// This needs to be refactored
// Right now code is going back to character to get the movies
// But the array of characters URLs are alrady known
const fetchMovies = async (character_url) => {
// const fetchMovies = async (character_movie_urls) => {
	  try {
			// console.log ("character_url is + " + character_url)
			const data = (await fetch(character_url))
			const dataJson = (await data.json())
			const character_movie_urls = (await dataJson.films)
			// console.log ("the movie URLs pre-Array from  in fetchMovies are " + character_movie_urls)
			// character_movie_urls = Array.from(character_movie_urls)
			// console.log ("the movie URLs in fetchMovies are " + character_movie_urls)
			const movies = (await returnMovies((character_movie_urls)))
			const my_movies = (await movies)
	  	console.log("Movies to return is " + JSON.stringify(my_movies));
			return my_movies
		} catch (err) {
    	console.log(err)
		}
  }




export { fetchMovies, getFilmDetails}
