const movieimageuris = {
	"A New Hope": "https://en.wikipedia.org/wiki/Star_Wars_(film)#/media/File:StarWarsMoviePoster1977.jpg",
}

function fetchMovieImageURI(name){
	return movieimageuris[name]
}

export { fetchMovieImageURI }
