import * as React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import BrowseScreen from "../BrowseScreen/BrowseScreen";
import Post from "../Post/Post";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import CartScreen from "../CartScreen/CartScreen";
import LogoTitle from "./LogoTitle";

const header = {
	headerTitle: <LogoTitle />,
	headerStyle: {
		backgroundColor: "#f4511e"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold"
	}
};

const BrowseStack = createStackNavigator(
<<<<<<< HEAD
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

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
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
    Profile: ProfileStack,
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
        } else if (routeName === "Profile") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
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
=======
	{
		Browse: {
			screen: BrowseScreen
		}
	},
	{
		navigationOptions: header
	}
);

const PostStack = createStackNavigator(
	{
		Search: {
			screen: Post
		}
	},
	{
		navigationOptions: header
	}
);

const ProfileStack = createStackNavigator(
	{
		Profile: {
			screen: ProfileScreen
		},
		Login: {
			screen: Login
		},
		Register: {
			screen: Register
		}
	},
	{
		navigationOptions: header
	}
);

const SettingsStack = createStackNavigator(
	{
		Settings: {
			screen: SettingsScreen
		}
	},
	{
		navigationOptions: header
	}
);

const CartStack = createStackNavigator(
	{
		Cart: {
			screen: CartScreen
		}
	},
	{
		navigationOptions: header
	}
);

export default createBottomTabNavigator(
	{
		Browse: BrowseStack,
		Search: PostStack,
		Profile: ProfileStack,
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
				} else if (routeName === "Profile") {
					iconName = `ios-person${focused ? "" : "-outline"}`;
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
>>>>>>> a4e24b93b037e0bbff2796e536feab1d55b78e9c
);
