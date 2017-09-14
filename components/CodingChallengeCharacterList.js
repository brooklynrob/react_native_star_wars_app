import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { fetchCodingChallengeCharacters } from '../api/CodingChallengeCharacters';

export default class CodingChallengeCharacterList extends Component {
	state = fetchCodingChallengeCharacters()

	render() {
		return (
		<ScrollView>
			<List>
				{this.state.characters.map((character) => (
					<ListItem
						key={character.name}
						title={`${character.name.toUpperCase()}`}
						//onPress={() => this.onLearnMore(character)}
					/>
				))}
			</List>
		</ScrollView>
		);
	}
}
