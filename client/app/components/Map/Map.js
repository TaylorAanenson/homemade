import * as React from "react";
import { MapView } from "expo";
import { StyleSheet, View, TextInput } from "react-native";

export default class Map extends React.Component {
	render() {
		return (
			// <View style={{ flex: 1 }}>
			// 	<View>
			// 		<TextInput type="text" placeholder=" search for food or chef.." />
			// 	</View>
			// 	<View>
			// 		<TextInput type="text" placeholder=" input your location" />
			// 	</View>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		// flex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});
