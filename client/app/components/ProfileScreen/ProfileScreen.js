import * as React from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	AsyncStorage,
	Alert
} from "react-native";
import { _verifier } from "../../../src/AuthentificationService";

export default class ProfileScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// text: "",
			// id: 0,
			// username: "",
			// email: "",
			// password: "",
			// firstname: "",
			// lastname: "",
			// create_date: "",
			// isLoggedIn: false
		};
	}

	checkToken = async () => {
		try {
			const value = await AsyncStorage.getItem("token");
			if (value !== null) {
				// let token = JSON.stringify(value);
				console.log("TOKEN!!" + value);
				return _verifier(value).then(res => {
					let tokenStr = JSON.stringify(res.verifiedToken);
					let userData = JSON.parse(tokenStr);
					console.log("STRING RETURN!!" + tokenStr);
					console.log("PARSED RETURN!!" + userData);
					if (userData.name === "TokenExpiredError") {
						Alert.alert("Session has expired");
					} else {
						this.setState({
							isLoggedIn: userData.isLoggedIn,
							id: userData._id,
							username: userData.username,
							email: userData.email,
							firstname: userData.firstname,
							lastname: userData.lastname,
							create_date: userData.create_date
						});
					}
				});
			}
		} catch (error) {
			console.log("NO TOKEN!!!" + error);
		}
	};

	componentWillMount() {
		this.checkToken();
	}

	removeData = async () => {
		try {
			await AsyncStorage.removeItem("token");
		} catch (error) {
			// Error saving data
		}
	};

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		console.log(this.state);
		let { navigation } = this.props;
		let id = navigation.getParam("_id", "n/a");
		let username = navigation.getParam("username", "n/a");
		let email = navigation.getParam("email", "n/a");
		let firstname = navigation.getParam("firstname", "n/a");
		let lastname = navigation.getParam("lastname", "n/a");
		let create_date = navigation.getParam("create_date", "n/a");
		// let isLoggedIn = navigation.getParam("isLoggedIn", "n/a");
		return (
			<View style={styles.container}>
				{isLoggedIn ? (
					<View style={styles.container}>
						<Text>Welcome Back {this.state.username}!</Text>
						<Text>{this.state.id}</Text>
						<Text>{this.state.email}</Text>
						<Text>{this.state.firstname}</Text>
						<Text>{this.state.lastname}</Text>
						<Text>{this.state.create_date}</Text>
						<Text>{this.state.isLoggedIn}</Text>
						<Button
							title="Logout"
							onPress={this.removeData}
							// onPress={() => this.props.navigation.navigate("Login")}
						/>
					</View>
				) : (
					<View style={styles.container}>
						<Text style={{ fontSize: 30 }}>New Here?</Text>
						<Button
							title="Login!"
							onPress={() => this.props.navigation.navigate("Login")}
						/>
						<Button
							title="Or Register!"
							onPress={() => this.props.navigation.navigate("Register")}
						/>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  
});
