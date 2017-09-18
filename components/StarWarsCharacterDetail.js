import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { Tile, List, ListItem } from 'react-native-elements'
import { fetchCharacterDetails } from '../api/CharacterDetails'
import StarWarsCharacterError from './StarWarsCharacterError'
import StarWarsMovieList from './StarWarsMovieList'

export default class StarWarsCharacterDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetchCharacterDetails
      (this.props.navigation.state.params.url,
      this.props.navigation.state.params.name)
    .then((data => this.setState({
      isLoading: false,
      characterDataLoaded: true,
      character: data })))
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    if (this.state.isLoading) {
			return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    if (this.state.character.exception.exceptionStatus == 'error') {
      alert(this.state.character.exception.exceptions[0].exception_message)
      return (
        <StarWarsCharacterError
          exception_type={`${this.state.character.exception.exceptions[0].exception_type}`}
          exception_message={`${this.state.character.exception.exceptions[0].exception_message}`}
        />
      )
    }

    if (this.state.character.exception.exceptionStatus == 'warning') {
      alert(this.state.character.exception.exceptions[0].exception_message)
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
          <ListItem
            title="Height"
            rightTitle={this.state.character.height}
            hideChevron
          />
        </List>

        <StarWarsMovieList
          {...this.props}
          character_name={`${this.state.character.name}`}
          character_url={`${this.state.character.url}`}
          character_movie_urls={`${this.state.character.character_movie_urls}`}>
        </StarWarsMovieList>


      </ScrollView>
    )
  }
}
