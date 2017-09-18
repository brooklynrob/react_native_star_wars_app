import { fetchMovieImageURI } from './MovieImages'

// getFilmDetails returns the details of a single film
// using the uri of the film as its argument
const getFilmDetails = async (movie_url) => {
	movie_url_to_search = movie_url + "?format=json"
	const data = (await fetch(movie_url_to_search))
	const dataJson = (await (data.json()))
	const movie =  {
		title: dataJson.title,
		release_date: dataJson.release_date,
		picture: fetchMovieImageURI(dataJson.title),
		director: dataJson.director,
		producer: dataJson.producer,
	}
	return movie
}

// This function is used to handle to map off all the individual
// movie calls and the need for all of them to complete first
const returnMovies = async (movie_urls) => {
	const movies = await (movie_urls.map((movie_url) =>
	getFilmDetails (movie_url)))
	return Promise.all(movies)
}

// The commented out code is the original way I had this set up
// Leaving here as I may go back to this and use as a backup method
// const fetchMovies = async (character_url) => {
const fetchMovies = async (character_movie_urls) => {
	try {
		//const data = (await fetch(character_url))
		//const dataJson = (await data.json())
		//const character_movie_urls = (await dataJson.films)
		character_movie_urls = character_movie_urls.split(',')
		const movies = (await returnMovies((character_movie_urls)))
		const my_movies = (await movies)
		return my_movies
	} catch (err) {
		console.log(err)
	}
}

export { fetchMovies }
