import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { fetchCharacterDetails, normalizeCharacter, normalizeCharacters } from '../api/CharacterDetails'
import StarWarsCharacterError from './StarWarsCharacterError'
import StarWarsMovieList from './StarWarsMovieList';

export default class StarWarsCharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    console.log("StarWarsCharacterDetail - props.navigation.state.params are " + JSON.stringify(props.navigation.state.params));
    console.log("StarWarsCharacterDetail - props.navigation are" + JSON.stringify(props.navigation));
  }

  //const {name} = this.props.navigation.state.params.character.name
  //const {url} = this.props.navigation.state.params.character.url

  // Somewhere in here need to see if there was nothing good found using the URL

  componentDidMount() {
    console.log("this.props.navigation.state.params is " + JSON.stringify(this.props.navigation.state.params))
    return fetchCharacterDetails
      (this.props.navigation.state.params.url,
      this.props.navigation.state.params.name)
      .then((data => this.setState({
        isLoading: false,
        characterDataLoaded: true,
        character: data })))
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    console.log ("this.state is " + JSON.stringify(this.state))
    if (this.state.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator />
				</View>
			);
		}

    if (this.state.character.exception.exceptionStatus == 'error') {
      return (
        <StarWarsCharacterError
          exception_type={`${this.state.character.exception.exceptions[0].exception_type}`}
          exception_message={`${this.state.character.exception.exceptions[0].exception_message}`}
        />
      )
    }

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.state.character.picture}}
          featured
          title={`${this.state.character.name.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Name"
            rightTitle={this.state.character.name}
            hideChevron
          />
					<ListItem
						title="Gender"
						rightTitle={this.state.character.gender}
						hideChevron
					/>
        </List>

        <StarWarsMovieList
          character_name={`${this.state.character.name}`}
          character_url={`${this.state.character.url}`}
          character_movie_urls={`${this.state.character.character_movie_urls}`}>
        </StarWarsMovieList>


      </ScrollView>
    );
  }
}
