import * as React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Button,
	Image,
	List,
	FlatList,
	ListItem,
	ScrollView
} from "react-native";
import RecentImage from "./assets/images/recent.png";
import PopularImage from "./assets/images/popular.png";
import PickupImage from "./assets/images/pickup.png";
import DeliveryImage from "./assets/images/delivery.png";
import NearbyImage from "./assets/images/nearby.png";
import PriceImage from "./assets/images/Sort-by-price.png";

export default class SettingsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		// const params = navigation.state.params || {};

		return {
			// headerTitle: <LogoTitle />,
			// title: 'homemade'
			// headerRight: (
			// 	<Button
			// 		onPress={() =>
			// 			navigation.navigate("Cart", {
			// 				_id: 1,
			// 				name: "Taylor",
			// 				age: 25,
			// 				sex: "Male",
			// 				foodPreference: "Vegan"
			// 			})
			// 		}
			// 		// onPress={() => Alert.alert("this is a button!")}
			// 		title="cart"
			// 		// title="+1"
			// 		color="#fff"
			// 	/>
			// )
		};
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.search}>
					<TextInput
						type="text"
						placeholder="search for food or chef.."
						style={styles.foodSearch}
					/>
				</View>
				<View style={styles.location}>
					<TextInput
						type="text"
						placeholder="input your location"
						style={styles.inputLocation}
					/>
				</View>
				<View style={styles.filters}>
					<View style={styles.selections}>
						<Image source={RecentImage} style={styles.image} />
						<Text>Recent</Text>
					</View>
					<View style={styles.selections}>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View style={styles.selections}>
						<Image source={PickupImage} style={styles.image} />
						<Text>Pick-up only</Text>
					</View>
				</View>
				<View style={styles.filters}>
					<View style={styles.selections}>
						<Image source={DeliveryImage} style={styles.image} />
						<Text>Delivery</Text>
					</View>
					<View style={styles.selections}>
						<Image source={NearbyImage} style={styles.image} />
						<Text>Distance</Text>
					</View>
					<View style={styles.selections}>
						<Image source={PriceImage} style={styles.image} />
						<Text>Price</Text>
					</View>
				</View>
				{/* <List>
                    <FlatList 
                    <ListItem 
                        <Image source={PopularImage} style={styles.image} />
                        <Text>Popular</Text>
                    /> */}
				<ScrollView style={{ flex: 1 }}>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
					<View>
						<Image source={PopularImage} style={styles.image} />
						<Text>Popular</Text>
					</View>
				</ScrollView>
				{/* /> */}
				{/* </List> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	search: {
		flex: 0.1,
		flexDirection: "row",
		backgroundColor: "#ffa500"
	},
	foodSearch: {
		flex: 1,
		// flexDirection: 'row',
		borderWidth: 5,
		borderColor: "#fff",
		// width: 100,
		height: 35,
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: "#fff"
	},
	location: {
		flex: 0.09,
		flexDirection: "row",
		backgroundColor: "#ffa500"
	},
	inputLocation: {
		flex: 1,
		// flexDirection: 'row',
		borderWidth: 5,
		borderColor: "#fff",
		// width: 100,
		height: 35,
		// marginTop: 2,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: "#fff"
	},
	filters: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	image: {
		height: 60,
		width: 60,
		marginLeft: 30,
		marginRight: 30,
		margin: 15
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	selections: {
		alignItems: "center"
	}
});
