function fetchMovieDetails(URL){
	console.log("Going to get the movie at the URL at " + URL)
	return fetch(URL)
        .then(response => response.json())
        .then((movie) => {
					console.log ("The movie title being processed is " + movie.title)
					return {
							title: movie.title,
							episode_id: movie.episode_id,
							director: movie.director,
							producer: movie.producer,
							url: movie.url,
						}
					})
				.catch((error) => {
					console.log("Movie details could not be loaded and returned this error: " + error);
					return {
						error: true,
						error:[
							{
								error_severity: "error",
								error_message: "An error occured in the response from the server"
							}
						]
					}
				});
		}

export { fetchMovieDetails }
