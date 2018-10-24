import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true
    };
  }

  componentDidMount(){
    return fetch("https://518ef615.ngrok.io/posts").then(
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
        <View style={{flex:1, marginTop: 20, flexDirection: 'column'}}>
        {this.state.data.map((postInfo) => {
          return(<View style={styles.postStyle} dataId={postInfo.id}>
              <Image
                  style={{width: 100, height: 100}}
                  source={{url:("https://via.placeholder.com/50x50")}}
              />
              <Text style={styles.textStyle}>{postInfo.title}</Text>
              <Text>{postInfo.information}</Text>
              <Text style={styles.textStyle, styles.priceStyle}>${postInfo.price}</Text>
          </View>);
        })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 20,
  },
  priceStyle:{
    fontSize: 20,
    color: 'green',
    alignItems:'right',
    justifyContent: 'flex-end',
  },
  postStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  }
});
