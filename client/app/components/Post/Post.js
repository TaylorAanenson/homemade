import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import { MapView } from "expo";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: true,
      data: {},
      search: ""
    };
  }

  searchPost = () => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(
        resJSON => {
          // alert((resJSON[4].information).includes(this.state.search));
          // alert(resJSON[0].title);
          let searchData = resJSON.filter(postData => {
            return postData.information.includes(this.state.search);
          });
          this.setState({ data: searchData });
          // console.log(this.state.data[0]);
        },
        function() {
          this.setState({ search: "" });
        }
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    return fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(resJSON => {
        this.setState(
          {
            isLoading: false,
            data: resJSON
          },
          function() {}
        );
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.searchBarStyle}>
          <TextInput
            style={styles.searchStyle}
            placeholder="enter search"
            onChangeText={search => this.setState({ search })}
            value={this.state.search}
          />
          <Button
            icon={{
              name: "search",
              size: 20
            }}
            buttonStyle={styles.buttonStyle}
            onPress={this.searchPost}
          />
        </View>
        <ScrollView>
          {this.state.data.map(postInfo => {
            return (
              <View style={styles.postStyle} dataId={postInfo.id}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ url: "https://via.placeholder.com/50x50" }}
                />
                <View style={{ marginLeft: 20, flex: 1 }}>
                  <Text style={styles.textStyle}>{postInfo.title}</Text>
                  <Text>{postInfo.information}</Text>
                  <Text style={(styles.textStyle, styles.priceStyle)}>
                    ${postInfo.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  priceStyle: {
    fontSize: 20,
    color: "green",
    flex: 1,
    textAlign: "right",
    marginTop: 20,
    marginLeft: 20
  },
  postStyle: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    flexDirection: "row"
  },
  searchStyle: {
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 8,
    borderBottomWidth: 5,
    marginLeft: 5,
    borderColor: "orange",
    width: 300,
    height: 45
  },
  searchBarStyle: {
    flexDirection: "row"
  },
  buttonStyle: {
    backgroundColor: "tomato",
    width: 50,
    height: 45,
    alignContent: "center",
    borderRadius: 5,
    marginTop: 25
  }
});
