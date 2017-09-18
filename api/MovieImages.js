const movie_image_uris = {
	"A New Hope": "https://en.wikipedia.org/wiki/File:StarWarsMoviePoster1977.jpg",
	"defaultpic": "http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg"
}

function fetchMovieImageURI(name){
	if (movie_image_uris[name]) { return movie_image_uris[name]; } else { return movie_image_uris["defaultpic"]; }
}

export { fetchMovieImageURI }
