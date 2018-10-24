import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator, FlatList } from 'react-native';

export default class AddPost extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={{flex: 1, flexDirection: 'column'}}>
				<Text>Add a Title: </Text>
				<TextInput placeholder="Add a Title" />
				</View>
			</VIew>	
		)
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
