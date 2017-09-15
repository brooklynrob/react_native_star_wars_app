import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { fetchCharacterDetails, normalizeCharacter, normalizeCharacters } from '../api/CharacterDetails'

class StarWarsCharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    console.log("Props are " + JSON.stringify(props.navigation.state.params));
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
    if (this.state.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator />
				</View>
			);
		}

    console.log("State is  " + JSON.stringify(this.state));
    //const character = this.props.navigation.state.

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
      </ScrollView>
    );
  }
}

export default StarWarsCharacterDetail;
