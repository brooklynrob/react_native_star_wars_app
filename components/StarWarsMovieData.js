import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, ScrollView } from 'react-native';
import StarWarsMovieRow from './StarWarsMovieRow';

export default class StarWarsMovieData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://swapi.co/api/films/?format=json')
      .then((response) => response.json())
      .then((responseJson) => {
				let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.results),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
		const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
		if (this.state.isLoading) {
      return (
				<View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }


// https://www.npmjs.com/package/react-native-table-component
    return (
			<View style={{flex: 1, paddingTop: 20}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => StarWarsMovieRow {...rowData} />}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
})
