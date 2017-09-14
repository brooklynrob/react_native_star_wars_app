import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ListView, ListItem } from 'react-native-elements';
import { fetchCharacters } from '../api/Characters';
//import { people } from '../config/data';
//import Person from '../data/PersonRow';

export default class StarWarsCharacterList extends React.Component {
	state = {
		characters: [{
				"name": "Luke Skywalker",
				"height": "172",
				"mass": "77",
			}]
		}

		componentDidMount() {
			fetchCharacters()
				.then((data => this.setState({ characters: data })))
			}

	onLearnMore = (character) => {
    this.props.navigation.navigate('Details', { ...character });
  };

	static navigationOptions = {
    dataSource: 'Star Wars Characters',
   };


	render() {
    return (
			<ScrollView>
				<List>
					{this.state.characters.map((character) => (
						<ListItem
							key={character.name}
							title={`${character.name.toUpperCase()}`}
							onPress={() => this.onLearnMore(character)}
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
