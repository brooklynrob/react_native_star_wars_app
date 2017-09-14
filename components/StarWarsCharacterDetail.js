import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class StarWarsCharacterDetail extends Component {
  render() {
    //const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;
		const { name, picture, mass, height, gender, movies, url } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture}}
          featured
          title={`${name.toUpperCase()}`}

        />

        <List>
          <ListItem
            title="Name"
            rightTitle={name}
            hideChevron
          />
					<ListItem
						title="Gender"
						rightTitle={gender}
						hideChevron
					/>
        </List>


      </ScrollView>
    );
  }
}

export default StarWarsCharacterDetail;
