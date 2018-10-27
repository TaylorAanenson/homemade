import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import {_signUp, _login} from '../../../src/AuthentificationService'
import { MapView } from 'expo';

export default class Login extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			text: "",
			id: 0,
			username: "",
			email: "",
			password: "",
			firstname: "",
			lastname: "",
			create_date: "",
			logged_in: "nothing"
		};
	}

  checkLogin = event => {
    let username = this.state.username;
    let password = this.state.password;
    console.log("Line 46");

    return _login(username, password).then(res => {
      // has trouble reaching here..
      if (res.token) {
        console.log(res);

        this.setState(
          {
            logged_in: true,
            id: response[0].id,
						username: response[0].username,
						email: response[0].email,
						firstname: response[0].firstname,
						lastname: response[0].lastname,
						create_date: response[0].create_date
          }, function() {
          console.log("You are logged in");
          AsyncStorage.setItem('token', res.token);

          // here is the code to navigate to whatever page you want
          // after being logged in...
          // currently it's just telling you whether or not
          // you have logged in based on your inputs
          this.props.navigation.navigate("Profile", {
								_id: this.state.id,
								username: this.state.username,
								email: this.state.email,
								firstname: this.state.firstname,
								lastname: this.state.lastname,
								create_date: this.state.create_date
							});
        });
      } else {
        console.log("You were not logged in");
        this.setState(
						{
							logged_in: false
						},
						function() {
							this.props.navigation.navigate("Register");
						}
					);
      }
    });
  }

  render() {
		return (
			<View style={styles.container}>
				<Image
					source={require("./assets/images/homemade-logo.png")}
					style={styles.logo}
				/>
				<Text style={styles.logoText}>HomeMade</Text>
				<TextInput
					style={styles.signin}
					placeholder="Username"
					onChangeText={username => this.setState({ username })}
				/>
				<TextInput
					style={styles.signin}
					placeholder="Password"
					onChangeText={password => this.setState({ password })}
				/>
				<TouchableOpacity onPress={this.checkLogin}>
					<Text style={styles.buttonText}>Button</Text>
				</TouchableOpacity>
				{this.state.logged_in == true && <Text>you are logged in</Text>}
				{this.state.logged_in == false && <Text>you are not logged in</Text>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch"
	},
	logo: {
		height: 190,
		width: 190
	},
	logoText: {
		fontSize: 40,
		margin: 2,
		color: "orange"
	},
	signin: {
		height: 40,
		width: 100,
		backgroundColor: "#fff",
		borderWidth: 0.5,
		borderRadius: 4,
		borderColor: "black",
		padding: 10
	}
});
