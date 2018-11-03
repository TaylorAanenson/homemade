import * as React from "react";
import {
  Text,
  TextInput,
  Image,
  NavigatorIOS,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import Map from "../Map/Map";
import { _verifier } from "../../../src/AuthentificationService";
import { _getMapLocations } from "../../../src/mapLocations";
// import LogoTitle from "../ModalStack/LogoTitle";

export default class BrowseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
      latitude: 0,
      longitude: 0,
      name: "",
      crypto: ""
    };
  }

  fetcher = () => {
    return fetch("http://9e0eefb6.ngrok.io/posts")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = event => {
    console.log(this.state.userSearch);
    let searchCrypto = this.state.userSearch;
    // this.fetcher().then(res => {
    //   console.log(res);
    //   // this.props.navigator.push({
    //   // 	passProps: { userInfo: res }
    //   // });
    // });
    return _getMapLocations(searchCrypto).then(res => {
      console.log("Line57");
      console.log(res);
      console.log("Line59");
      this.setState({
        latitude: res[0].latitude,
        longitude: res[0].longitude,
        name: res[0].name,
        crypto: res[0].crypto
      });
    });
  };

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
          // if (userData.name === 'TokenExpiredError') {
          // Alert.alert('Session has expired');
          // } else {
          // this.setState({
          //   isLoggedIn: userData.isLoggedIn,
          //   id: userData._id,
          //   username: userData.username,
          //   email: userData.email,
          //   firstname: userData.firstname,
          //   lastname: userData.lastname,
          //   create_date: userData.create_date
          // });
          // }
        });
      }
    } catch (error) {
      console.log("NO TOKEN!!!" + error);
    }
  };

  componentDidMount() {
    this.handleSubmit();
    this.checkToken();
  }

  static navigationOptions = ({ navigation }) => {
    return {};
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            height: 40
          }}
        >
          <TextInput
            style={{ padding: 10 }}
            placeholder="enter search"
            onChangeText={userSearch => this.setState({ userSearch })}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text>Seach</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Map
            style={StyleSheet.absoluteFillObject}
            latitude={this.state.latitude}
            longitude={this.longitude}
            name={this.name}
            crypto={this.crypto}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  search: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#ffa500"
  },
  foodSearch: {
    flex: 1,
    // flexDirection: 'row',
    borderWidth: 2,
    // width: 100,
    height: 40,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  location: {
    flex: 0.07,
    flexDirection: "row",
    backgroundColor: "#ffa500"
  },
  inputLocation: {
    flex: 1,
    // flexDirection: 'row',
    borderWidth: 2,
    // width: 100,
    height: 40,
    marginTop: -7,
    marginLeft: 5,
    marginRight: 5
  }
});
