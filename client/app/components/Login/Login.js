import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	Alert,
	AsyncStorage
} from "react-native";
import { _signUp, _login } from "../../../src/AuthentificationService";
import { MapView } from "expo";

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
			isLoggedIn: "nothing"
		};
	}

	checkLogin = event => {
		event.preventDefault();
		let username = this.state.username;
		let password = this.state.password;
		console.log("Line 46");

		return _login(username, password).then(res => {
			console.log("LOGIN TOKEN!!" + res.token);
			if (res.token) {
				console.log(res);

				this.setState(
					{
						isLoggedIn: true,
						id: res.result[0].id,
						username: res.result[0].username,
						email: res.result[0].email,
						firstname: res.result[0].firstname,
						lastname: res.result[0].lastname,
            create_date: res.result[0].create_date
					},
					function() {
						console.log("You are logged in");

						// storeData = async () => {
						//   try {
						//     await AsyncStorage.setItem("token", res.token);
						//   } catch (error) {
						//     // Error saving data
						//   }
						// }

						// jwt.verify(res.token, process.env.JWT_SECRET, function(err, decoded) {
						//   console.log("FOO!!"+decoded.foo) // bar
            // });
            
            AsyncStorage.removeItem("token");
						AsyncStorage.setItem("token", res.token);

						// here is the code to navigate to whatever page you want
						// after being logged in...
						// currently it's just telling you whether or not
						// you have logged in based on your inputs
						this.props.navigation.navigate("Profile", {
              isLoggedIn: true,
							_id: this.state.id,
							username: this.state.username,
							email: this.state.email,
							firstname: this.state.firstname,
							lastname: this.state.lastname,
							create_date: this.state.create_date
						});
					}
				);
			} else {
				console.log("You were not logged in");
				this.setState(
					{
						isLoggedIn: false
					},
					function() {
						this.props.navigation.navigate("Register");
					}
				);
			}
		});
	};

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
					secureTextEntry={true}
					onChangeText={password => this.setState({ password })}
				/>
				<TouchableOpacity onPress={this.checkLogin}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
				{this.state.isLoggedIn == true && <Text>you are logged in</Text>}
				{this.state.isLoggedIn == false && <Text>you are not logged in</Text>}
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
