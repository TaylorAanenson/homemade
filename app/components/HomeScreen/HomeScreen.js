import * as React from "react";
import { View, Text, Button, Alert } from "react-native";
import LogoTitle from '../RootStack/LogoTitle';

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: <LogoTitle />,
			// title: 'homemade'
			headerRight: (
				<Button
					// onPress={navigation.getParam("increaseCount")}
					onPress={() => Alert.alert("this is a button!")}
					// title="+1"
					title="cart"
					color="#fff"
				/>
			)
		};
	};

	// componentDidMount() {
	// 	this.props.navigation.setParams({ increaseCount: this._increaseCount });
	// }

	// state = {
	// 	count: 0,
	// };

	// _increaseCount = () => {
	// 	this.setState({ count: this.state.count + 1 });
	// };

	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() =>
						this.props.navigation.navigate("Details", {
							_id: 1,
							name: "Taylor",
							age: 25,
							sex: "Male",
							foodPreference: "Vegan"
						})
					}
				/>
			</View>
		);
	}
}
