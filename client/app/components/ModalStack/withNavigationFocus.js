import React from "react";
import { Text } from "react-native";
import { withNavigationFocus } from "react-navigation";

class FocusStateLabel extends React.Component {
	render() {
		return <Text>{this.props.isFocused ? "Focused" : "Not focused"}</Text>;
	}
}

// withNavigationFocus returns a component that wraps FocusStateLabel and passes
// in the navigation prop
export default withNavigationFocus(FocusStateLabel);
