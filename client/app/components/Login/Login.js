import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import { MapView } from 'expo';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  submit = () => {
    Alert.alert('hi');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/images/homemade-logo.png')} style={styles.logo}/>
        <Text
        style={{
          fontSize: 40,
          margin: 2,
          color: 'orange'
        }}>HomeMade</Text>
        <TextInput
          style={styles.signin}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.signin}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity onPress={this.submit}>
           <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  logo: {
    height: 190,
    width: 190
  },
  signin: {
    height: 40, 
    width: 100, 
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10
  }
});
