import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import StarWarsCharacterList from '../components/StarWarsCharacterList';
import StarWarsCharacterDetail from '../components/StarWarsCharacterDetail';
import StarWarsMovieList from '../components/StarWarsMovieList';

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
});

const CodingChallengeStack = StackNavigator({
  CodingChallengeStackList: {
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
      title: 'CodingChallenge',
    }
  },
	StarWarsMovieList: {
    screen: StarWarsMovieList,
    navigationOptions: {
      title: 'Movies',
    }
  },
});
