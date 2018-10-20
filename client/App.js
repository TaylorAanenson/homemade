import React from 'react';
import Home from './app/components/Home/Home';
import Login from './app/components/Login/Login';
import Post from './app/components/Post/Post';
import TabNavigator from './app/components/TabNavigator/TabNavigator'

export default class App extends React.Component {
	
	render() {
		return (
		  // <Login />
		  <Post />
		);
	}
}
