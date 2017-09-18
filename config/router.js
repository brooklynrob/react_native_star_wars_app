import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import StarWarsCharacterList from '../components/StarWarsCharacterList';
import StarWarsCharacterDetail from '../components/StarWarsCharacterDetail';
import StarWarsMovieList from '../components/StarWarsMovieList';
import StarWarsMovieDetail from '../components/StarWarsMovieDetail';

const StarWarsCharacterStack = StackNavigator({
  StarWarsCharacterListAll: {
    screen: StarWarsCharacterList,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `ALL`,
    }),
  },
  Details: {
    screen: StarWarsCharacterDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
  MovieDetails: {
    screen: StarWarsMovieDetail,
    navigationOptions: ({ navigation }) => ({
      //title: `${navigation.state.params.title.toUpperCase()}`,
      title: `Movie Details`,
    }),
  },
});

const CodingChallengeStack = StackNavigator({
  CodingChallengeStackList: {
    screen: StarWarsCharacterList,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `From File`,
    }),
  },
  Details: {
    screen: StarWarsCharacterDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
  MovieDetails: {
    screen: StarWarsMovieDetail,
    navigationOptions: ({ navigation }) => ({
      //title: `${navigation.state.params.title.toUpperCase()}`,
      title: `Movie Details`,
    }),
  },
});


const StarWarsMovieStack = StackNavigator({
  StarWarsMovieList: {
    screen: StarWarsMovieList,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `Movies`,
    }),
  },
  MovieDetails: {
    screen: StarWarsMovieDetail,
    navigationOptions: ({ navigation }) => ({
      //title: `${navigation.state.params.title.toUpperCase()}`,
      title: `Movie Details`,
    }),
  },
});

export const Tabs = TabNavigator({
  StarWarsCharactersAll: {
    screen: StarWarsCharacterStack,
    navigationOptions: {
      title: 'All characters'
    },
  },
  CodingChallenge: {
    screen: CodingChallengeStack,
    navigationOptions: {
      title: 'Coding Challenge',
    }
  },
	StarWarsMovies: {
    screen: StarWarsMovieStack,
    navigationOptions: {
      title: 'Movies',
    }
  },
});
