import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator, Button } from 'react-native';

export default class AddPost extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				 <View style={styles.postStyle}>
			        <Text>Title: </Text>
					<TextInput style={styles.inputStyle} placeholder="Title..." />
        
			        <Text style={styles.spacing}>Description:</Text>
					<TextInput style={styles.inputStyle} multiline={true} placeholder="Description..." />

					<Text style={styles.spacing}>Ingredients:</Text>
					<TextInput style={styles.inputStyle} multiline={true} placeholder="Insert a comma after every ingredients..." />

					<Text style={styles.spacing}>Cuisine:</Text>
					<TextInput style={styles.inputStyle} placeholder="Enter Type of Cuisine..." />

					

			        <Button color="tomato" title="Submit"/>
		        </View>
			</VIew>	
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    alignSelf: 'stretch',
  },
  postStyle: {
    backgroundColor: 'orange',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
  }
});

