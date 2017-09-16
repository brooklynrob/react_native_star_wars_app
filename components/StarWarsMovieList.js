import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { fetchMoviesAll } from '../api/MoviesAll';
import { fetchMovies } from '../api/Movies';
import { fetchMovieDetails } from '../api/MovieDetails';
import MovieRow from './StarWarsMovieRow';

export default class StarWarsMovieList extends React.Component {
	constructor(props) {
		super(props);
		console.log("The props are" + JSON.stringify(props));
		//console.log ("this.props.navigation.routeName is " + this.props.navigation.state.routeName);
		//if this.props.movies exists that means
			// we already have the movies (likely from a characters list of movies)
			// and so we will set this.state.movies to that list and set isLoading to false
		if (this.props.movies) {
			console.log("There are movies and they are " + JSON.stringify(this.props.movies));
			this.state = {
				hasMovies: true,
				movieURLsAsString: this.props.movies,
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
			if (this.state.hasMovies && this.state.movieURLsAsString) {
				return fetchMovies(this.state.movieURLsAsString)
					.then((data => this.setState ({
							isLoading: false,
							moviesDataLoaded: true,
							all_movies: data,
							movies: data })))
			} else {
				return fetchMoviesAll()
						.then((data => this.setState ({
							isLoading: false,
							moviesDataLoaded: true,
							all_movies: data,
							movies: data })))
			}
		}


		// https://www.npmjs.com/package/react-native-table-component
	render() {
		console.log("The movies is " + JSON.stringify(this.state.movies))
		console.log ("this.state in MovieList is " + JSON.stringify(this.state))
    if (this.state.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator />
				</View>
			);
		}

			return (
			<ScrollView>
				<List>
					{this.state.movies.map((movie) => (
						<ListItem
							key={movie.title}
							title={`${movie.title.toUpperCase()}`}
							//onPress={() => this.onLearnMore(character)}
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
