// import * as React from "react";
// import { Button, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import NavStack from "../NavStack/NavStack";
import ModalScreen from "../ModalScreen/ModalScreen";

const ModalStack = createStackNavigator(
	{
		Main: {
			screen: NavStack
		},
		MyModal: {
			screen: ModalScreen
		}
	},
	{
		mode: "modal",
		headerMode: "none"
	}
);

export default ModalStack;
