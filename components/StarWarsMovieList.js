import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { fetchMoviesAll } from '../api/MoviesAll';
import { fetchMovies } from '../api/Movies';

export default class StarWarsMovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
		console.log("The props in movie list are" + JSON.stringify(props));
		//     this.props.navigation.navigate('MovieDetails', { ...movie });
		//console.log ("in movie list this.props.navigation.routeName is " + this.props.navigation.state.routeName);
		//console.log ("this.props.navigation.routeName is " + this.props.navigation.state.routeName);
		//if this.props.movies exists that means
			// we already have the movies (likely from a characters list of movies)
			// and so we will set this.state.movies to that list and set isLoading to false
		if (this.props.character_movie_urls) {
			console.log("There are character_movie_urls in props and they are " + JSON.stringify(this.props.character_movie_urls));
			this.state = {
				characterName: this.props.character_name,
				characterURL: this.props.character_url,
				hasMovies: true,
				movieURLs: this.props.character_movie_urls,
				moviesDataLoaded: false,
				isLoading: true
			}
		} else {
			this.state = {
				hasMovies: false,
				moviesDataLoaded: false,
				isLoading: true
			}
		}
		//console.log("StarWarsMovieDetail - props.navigation.state.params are " + JSON.stringify(props.navigation.state.params));
		//console.log("StarWarsMovieDetail - props.navigation are" + JSON.stringify(props.navigation));
	}

	componentDidMount() {
			console.log ("this.state.movieURLs is " + this.state.movieURLs)
			if (this.state.hasMovies && this.state.movieURLs) {
				// TO DO: pass the movieURL not the characterURL in following
				// In present form another server call is required ...
				// to get characterd and in turn the array of characters' films/movies
				// This is done in FetchMovies. Doing it this way for now to get
				// my promise to return right
				return fetchMovies(this.props.character_url)
				.then((data => this.setState ({
						movies: data,
						isLoading: false,
						moviesDataLoaded: true,
					})))
				.catch((error)=>{
					console.log("Api call error");
					console.log ("this.state in after API error is " + JSON.stringify(this.state));
					alert(error.message);
					this.setState ({
						isLoading: true,
						inError: true
					})
				})
			} else {
				return fetchMoviesAll()
					.then((data => this.setState ({
						movies: data,
						isLoading: false,
						moviesDataLoaded: true,
						all_movies: data,
						})
					))
				}
			}

	onLearnMore = (movie) => {
    this.props.navigation.navigate('MovieDetails', { ...movie });
  };


	render() {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator />
				</View>
			);
		}
		//console.log("The movies are " + JSON.stringify(this.state.movies))
		//console.log ("this.state in MovieList right after render is " + JSON.stringify(this.state))


		return (
			<ScrollView>
				<List>
					{this.state.movies.map((movie) => (
						<ListItem
							key={movie.title}
							title={`${movie.title.toUpperCase()}`}
							onPress={() => this.onLearnMore(movie)}
						/>
					))}
				</List>
			</ScrollView>
			);
		}
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
