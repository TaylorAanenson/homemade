import * as React from "react";
// import { Font } from 'expo';
// import { Button, Alert } from "react-native";
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
// Icons.loadAsync({'Ionicons' : require('react-native-vector-icons/Ionicons')})
import BrowseScreen from "../BrowseScreen/BrowseScreen";
import CartScreen from "../CartScreen/CartScreen";
import withNavigationFocus from "../ModalStack/withNavigationFocus";
import NavigationEvents from "../ModalStack/NavigationEvents";
import LogoTitle from "../ModalStack/LogoTitle";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
// import ModalStack from '../ModalStack/ModalStack';

const BrowseStack = createStackNavigator(
	{
		Browse: {
			screen: BrowseScreen
		}
	},
	{
		// initialRouteName: "Browse",
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

const SearchStack = createStackNavigator(
	{
		Search: {
			screen: SearchScreen
		}
	},
	{
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

const SettingsStack = createStackNavigator(
	{
		Settings: {
			screen: SettingsScreen
		}
	},
	{
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

const CartStack = createStackNavigator(
	{
		Cart: {
			screen: CartScreen
		},
		Focus: {
			screen: withNavigationFocus
		},
		Events: {
			screen: NavigationEvents
		}
	},
	{
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

export default createBottomTabNavigator(
	{
		Browse: BrowseStack,
		Search: SearchStack,
		Settings: SettingsStack,
		Cart: CartStack
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === "Browse") {
					iconName = `ios-planet${focused ? "" : "-outline"}`;
				} else if (routeName === "Search") {
					iconName = `ios-search${focused ? "" : "-outline"}`;
				} else if (routeName === "Settings") {
					iconName = `ios-settings${focused ? "" : "-outline"}`;
				} else if (routeName === "Cart") {
					iconName = `ios-cart${focused ? "" : "-outline"}`;
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
