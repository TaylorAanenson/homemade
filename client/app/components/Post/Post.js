import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator, FlatList } from 'react-native';
import { MapView } from 'expo';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true
    };
  }

  componentDidMount(){
    return fetch("https://cb830e33.ngrok.io/posts").then(
      (res) => res.json()
      ).then((resJSON) => {
        this.setState({
          isLoading: false,
          dataSource: resJSON
        }, function(){

        });
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View className="title-bar">
        </View>
        <View className="posts">
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text dataId={item.id}> <Text style={styles.textStyle}>{item.title}</Text> - <Text>{item.information}</Text></Text>}
            keyExtractor={({id}, index) => id}
            style={{
              top: 100
            }}
            />
          </View>
          <View className="navbar-footer">
          </View>
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
  textStyle: {
    fontSize: 20,
  }
});
