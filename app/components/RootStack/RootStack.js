import * as React from "react";
import { Button, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../HomeScreen/HomeScreen";
import DetailsScreen from "../DetailsScreen/DetailsScreen";
import withNavigationFocus from "../Home/withNavigationFocus";
import NavigationEvents from "../Home/NavigationEvents";
import LogoTitle from "./LogoTitle";

const RootStack = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailsScreen,
		Focus: withNavigationFocus,
		Events: NavigationEvents
	},
	{
		initialRouteName: "Home",
		navigationOptions: {
			headerTitle: <LogoTitle />,
			// headerRight: (
			// 	<Button
			// 		onPress={() => Alert.alert("this is a button!")}
			// 		title="cart"
			// 		color="#fff"
			// 	/>
			// ),
			headerStyle: {
				backgroundColor: "#f4511e"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				fontWeight: "bold"
			}
		}
	}
);

export default RootStack;
