import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default class StarWarsMovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState ({
      title: this.props.navigation.state.params.title,
      picture: this.props.navigation.state.params.picture,
      director: this.props.navigation.state.params.director,
      producer: this.props.navigation.state.params.producer,
      isLoading: false
    })
    console.log("this.state is " + JSON.stringify(this.state))
  }

  render() {
    //console.log ("this.state is " + JSON.stringify(this.state))
    if (this.state.isLoading) {
			return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }


    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.state.picture}}
          featured
          title={`${this.state.title.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Title"
            rightTitle={this.state.title}
            hideChevron
          />
					<ListItem
						title="Director"
						rightTitle={this.state.director}
						hideChevron
					/>
          <ListItem
            title="Producer"
            rightTitle={this.state.producer}
            hideChevron
          />
        </List>


      </ScrollView>
    );
  }
}
