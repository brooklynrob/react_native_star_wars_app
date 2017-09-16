function fetchMovieDetails(URL){
  return fetch(URL)
        .then(response => response.json())
        .then((character) => {
					return {
							//exception: checkMovieForErrors(character, name),
							title: movie.name,
							episode_id: movie.episode_id,
							director: movie.director,
							producer: movie.producer,
							url: moive.url,
						}
					}
				)}

export { fetchMovieDetails }
