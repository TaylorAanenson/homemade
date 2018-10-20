import * as React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";

class BrowseScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Browse!</Text>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Settings!</Text>
			</View>
		);
	}
}

export default createBottomTabNavigator(
	{
		Browse: BrowseScreen,
		Settings: SettingsScreen
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === "Browse") {
					iconName = `ios-information-circle${focused ? "" : "-outline"}`;
				} else if (routeName === "Settings") {
					iconName = `ios-options${focused ? "" : "-outline"}`;
				}
				return (
					<Ionicons
						name={iconName}
						size={horizontal ? 20 : 25}
						color={tintColor}
					/>
				);
			}
		}),
		tabBarOptions: {
			activeTintColor: "tomato",
			inactiveTintColor: "gray"
		}
	}
);
