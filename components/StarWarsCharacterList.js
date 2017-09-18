import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ListView, ListItem } from 'react-native-elements';
const coding_challenge_json_data = require('../jsondata/CodingChallengeCharacters.json');

// This functions get characters from the API / JSON
import { fetchCharacters } from '../api/Characters';

// This function just gets the coding characters -- redundent and soon to be depcrecated
//import { fetchCodingChallengeCharacters } from '../api/CodingChallengeCharacters';

// helper function to set the type of search to do -- Coding Challenge (from JSON) or all from API
var setSearchType = function (routeName) {
	if (routeName == "CodingChallengeStackList") {
		return "CodingChallenge";
	} else {
		return "All";
	}
}

var setCharacterData = function (searchType, data) {
	if (searchType == 'CodingChallenge')
	{
		return coding_challenge_json_data.characters;
	} else {
		return data;
	}
}


export default class StarWarsCharacterList extends React.Component {
	constructor(props) {
		super(props);
		//console.log ("this.props.navigation.routeName is " + this.props.navigation.state.routeName);
		this.state = {
      isLoading: true,
			searchType: setSearchType(this.props.navigation.state.routeName)
    }
	}

	componentDidMount() {
		return fetchCharacters()
		.then((data => this.setState ({
			isLoading: false,
			charactersDataLoaded: true,
			all_characters: data,
			// this is a bit of a hack in order to set the returned data to
			// the json if we're doing
			characters: setCharacterData(this.state.searchType, data)})))
		}

	onLearnMore = (character) => {
    this.props.navigation.navigate('Details', { ...character });
  };

	//static navigationOptions = {
  //  dataSource: 'Star Wars Characters',
  // };


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
