import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { fetchMovies } from '../api/Movies';
import MovieRow from './StarWarsMovieRow';

//import MovieData from '../jsondata/MovieData';

export default class StarWarsMovieList extends React.Component {
	state = {
		movies: [{
			"title": "Star Wars",
		}]
	}



	componentDidMount() {
		this.setState({
			isLoading: false
		})
		fetchMovies()
			.then((data => this.setState({ movies: data })))
		}


		// https://www.npmjs.com/package/react-native-table-component
	render() {
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
