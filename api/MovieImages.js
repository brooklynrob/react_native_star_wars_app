const movie_image_uris = {
	"A New Hope": "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
	"The Empire Strikes Back": "http://cdn3.volusion.com/bxqxk.xvupj/v/vspfiles/photos/SIXSHEET175-2.jpg",
	"defaultpic": "http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg"
}

function fetchMovieImageURI(title) {
	if (movie_image_uris[title]) {
		return movie_image_uris[title]
	} else {
		return movie_image_uris["defaultpic"]
	}
}

export { fetchMovieImageURI }
