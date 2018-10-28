import * as React from "react";
import { View, Text, Button } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const _id = navigation.getParam("_id", "n/a");
    const username = navigation.getParam("username", "n/a");
    const email = navigation.getParam("email", "n/a");
    const firstname = navigation.getParam("firstname", "n/a");
    const lastname = navigation.getParam("lasname", "n/a");
    const create_date = navigation.getParam("creat_date", "n/a");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome Back {username}!</Text>
        <Text>Login!</Text>
        <Button
          title="Here"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Text>Or Register!</Text>
        <Button
          title="Here"
          onPress={() => this.props.navigation.navigate("Register")}
        />
      </View>
    );
  }
}
