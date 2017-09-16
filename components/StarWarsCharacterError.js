import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class StarWarsCharacterError extends Component {
	constructor(props) {
		super(props);
		console.log ("This in StarWarsCharacterError are " + JSON.stringify(this));
		this.state = {
			titleText: "ERROR PAGE",
			exception_type: this.props.exception_type,
			exception_message: this.props.exception_message
		}
	}

// To Do: Retrieve error message from param and show that

	// To Do: Add some color here -- white text on  red background
	render() {
//						title={`${character.name.toUpperCase()}`}
		return (
			<Text style={{fontWeight: 'bold'}}>
  			There was an exception. The exception type was:
					<Text style={{color: 'red'}}>
						{this.state.exception_type}
  			</Text>
				and the message was: &quot;{this.state.exception_message}&quot;.
			</Text>
    );
  }
}
