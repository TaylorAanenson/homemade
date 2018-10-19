import * as React from "react";
import { View, Text, Button } from "react-native";

export default class DetailsScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;
		return {
			title: params ? params.name : "No user exists",
			/* These values are used instead of the shared configuration! */
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor
		};
	};
	render() {
		const { navigation } = this.props;
		const _id = navigation.getParam("_id", "Sorry, that id doesn't exist");
		const name = navigation.getParam("name", "Sorry, that name doesn't exist");
		const age = navigation.getParam("age", "Sorry, can't find age of null");
		const sex = navigation.getParam("sex", "Sorry, can't find sex of null");
		const foodPreference = navigation.getParam(
			"foodPreference",
			"Sorry, no food preference of null"
		);
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Details Screen</Text>
				<Text>_id: {_id}</Text>
				<Text>name: {name}</Text>
				<Text>age: {age}</Text>
				<Text>sex: {sex}</Text>
				<Text>foodPreference: {foodPreference}</Text>
				<Button
					title="Update title"
					onPress={() => this.props.navigation.setParams({ name: "Updated!" })}
				/>
				<Button
					title="Go to Details... again"
					onPress={() =>
						this.props.navigation.push("Details", {
							_id: Math.floor(Math.random() * 100)
						})
					}
				/>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.popToTop()}
				/>
				<Button
					title="Go to Focus"
					onPress={() => this.props.navigation.navigate("Focus")}
				/>
				<Button
					title="Go to Events"
					onPress={() => this.props.navigation.navigate("Events")}
				/>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
			</View>
		);
	}
}
