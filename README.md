## About this app
This was developed for a coding challenge I was given.

## Installation
* Assumptions
	* yarn installed on machine
	* Expo installed on mobile device on same local network
* Commands to run:
	* `git clone git@github.com:brooklynrob/react_native_star_wars_app.git`
	*	`cd react_native_star_wars_app/`
	* `yarn install`
	* `yarn start`

## Notes
* "films" in the API are called "movies" in the app
* Used async/await in Movies.js primarily to better handle a .map I do inside there; otherwise this code use Promises
* No redux or graphql though either technology could be useful to use in this app
* Also know Flow though as I developed this I really wished I had implemented a typing system up front to shape some of the objects like the "movie" object, and especially to handle optional values.

## To Do
* More styling? "Use styling to make it pretty. Styling is up to you!"
* Add unit tests and testing framework (none implemented yet)
* Clean-up and Nits
	* Right now doing a duplicate call to API - see Movie.js comments - to get characters movies. Fix this.
	* Titles
	* Clean up semi-colons
	* Clean up indenting
	* Clean up tabs
	* Clean up async
	* Remove extraneous navigation components
	* Make exceptions more robust
		* Warnings
			* Put them on top of screen?
		* White text on red backing
		* Do not just read first exception from exception array

## References
Sites and repos that were useful references for various idioms, design patterns, and best practices.
* https://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html
* https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4 (Tab Navigator concept)
* https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8
