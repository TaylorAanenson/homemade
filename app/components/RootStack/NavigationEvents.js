import React from "react";
import { View } from "react-native";
import { NavigationEvents } from "react-navigation";

const MyScreen = () => (
	<View>
		<NavigationEvents
			onWillFocus={payload => console.log("will focus", payload)}
			onDidFocus={payload => console.log("did focus", payload)}
			onWillBlur={payload => console.log("will blur", payload)}
			onDidBlur={payload => console.log("did blur", payload)}
		/>
		{/* 
      Your view code
    */}
	</View>
);

export default MyScreen;
