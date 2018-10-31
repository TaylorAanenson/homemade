import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      location_id: 2,
      title: 'Untitled',
      price: 0,
      information: 'Contact chef for description',
      ingredients: '',
    };
  }

  createPost = () => {
    let title = this.state.title;
    let location_id = this.state.location_id;
    let user_id = this.state.user_id;
    let price = parseFloat(this.state.price);
    let information = this.state.information;
    let ingredients = [];

    ingredients.push(this.state.ingredients);

    fetch('http://fd491e4d.ngrok.io/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        location_id,
        user_id,
        price,
        information,
        ingredients,
      }),
    }).then(res => res.json());
    //then redirects to post tab
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.postStyle}>
          <Text>Title: </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Title..."
            onChangeText={title => this.setState({ title })}
          />

          <Text style={styles.spacing}>Description:</Text>
          <TextInput
            style={(styles.inputStyle, styles.descriptionStyle)}
            multiline={false}
            placeholder="Description..."
            onChangeText={information => this.setState({ information })}
          />

          <Text style={styles.spacing}>Ingredients:</Text>
          <TextInput
            style={styles.inputStyle}
            multiline={true}
            placeholder="Insert a comma after every ingredients..."
            onChangeText={ingredients => this.setState({ ingredients })}
          />

          <Text style={styles.spacing}>Price:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="$0.00"
            onChangeText={price => this.setState({ price })}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            color="white"
            title="Submit"
            onPress={this.createPost}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: 20,
    alignSelf: 'stretch',
  },
  postStyle: {
    marginHorizontal: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    height: 50,
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  descriptionStyle: {
    height: 200,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: 'tomato',
    marginTop: 20,
    borderRadius: 5,
  },
});
