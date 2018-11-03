import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  AsyncStorage,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { _verifier } from '../../../src/AuthentificationService';
// import _tokenVerifier from '../TokenVerifier/TokenVerifier';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: 0,
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      create_date: '',
      isLoggedIn: false
    };
  }

  checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // let token = JSON.stringify(value);
        console.log('TOKEN!!' + value);
        return _verifier(value).then(res => {
          let tokenStr = JSON.stringify(res.verifiedToken);
          let userData = JSON.parse(tokenStr);
          console.log('STRING RETURN!!' + tokenStr);
          console.log('PARSED RETURN!!' + userData);
          if (userData.name === 'TokenExpiredError') {
            Alert.alert('Session has expired');
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
      console.log('NO TOKEN!!!' + error);
    }
  };

  componentWillMount() {
    this.checkToken();
  }

  removeData = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(this.state);
    let { navigation } = this.props;
    let id = navigation.getParam('_id', 'n/a');
    let username = navigation.getParam('username', 'n/a');
    let email = navigation.getParam('email', 'n/a');
    let firstname = navigation.getParam('firstname', 'n/a');
    let lastname = navigation.getParam('lastname', 'n/a');
    let create_date = navigation.getParam('create_date', 'n/a');
    // let isLoggedIn = navigation.getParam("isLoggedIn", "n/a");
    return (
      <View style={styles.container}>
        {isLoggedIn ? (
          <View style={styles.container}>
            <Text style={{ marginTop: 5, fontSize: 30 }}>
              Welcome Back {this.state.username}!
            </Text>
            <Text style={{ marginTop: 5, fontSize: 20 }}>
              Ready for a delicious homemade meal?
            </Text>
            <Text style={{ marginTop: 5, fontSize: 20 }}>
              Would you like to{' '}
              <Button
                title="Browse"
                onPress={() => this.props.navigation.navigate('Browse')}
              />
              ?
            </Text>
            <Text style={{ marginTop: 5, fontSize: 20 }}>
              Or{' '}
              <Button
                style={{ marginTop: 0 }}
                title="Search"
                onPress={() => this.props.navigation.navigate('Search')}
              />
              ?
            </Text>
            <ScrollView style={{ flex: 1 }}>
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Food" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
              <Button title="Beer" />
            </ScrollView>
            <Button
              title="Logout"
              onPress={this.removeData}
              // onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.selectionText}>Ready to eat?</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Login!</Text>
            </TouchableOpacity>
            <Text style={styles.selectionText}>New Here?</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={styles.buttonText}>Get Registered!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectionText: {
	fontSize: 35, 
	margin: 5
  },
  buttons: {
    margin: 5,
    padding: 5,
    width: 160,
    borderWidth: 5,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    color: '#f4511e',
    fontSize: 20,
    textAlign: 'center'
  }
});
