import React from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Post from '../Post/Post';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavigation = TabNavigator(
  {
    Home: { screen: Home },
    Browse: { screen: Post },
    Login: { screen: Login }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Browse') {
          iconName = `coffee`;
        }else if (routeName === 'Login') {
          iconName = `id-badge`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default BottomNavigation;