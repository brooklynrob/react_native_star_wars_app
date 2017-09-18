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

// fetchMovies, needs to be refactored
// Right now code is going back to character to get the movies
// But the array of characters URLs is already known and should be
// the starting point. Doing it this way is causing a pernious error
// with the map so for now doing it this way
const fetchMovies = async (character_url) => {
// const fetchMovies = async (character_movie_urls) => {
	try {
		const data = (await fetch(character_url))
		const dataJson = (await data.json())
		const character_movie_urls = (await dataJson.films)
		// character_movie_urls = Array.from(character_movie_urls)
		const movies = (await returnMovies((character_movie_urls)))
		const my_movies = (await movies)
		return my_movies
	} catch (err) {
		console.log(err)
	}
}

export { fetchMovies }
