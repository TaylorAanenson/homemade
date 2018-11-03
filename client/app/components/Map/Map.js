import * as React from "react";
import { MapView, StyleSheet, Callout, View, TextInput } from "expo";
import { coordinate } from "./coordinates";

export default class Map extends React.Component {
  render() {
    return (
      // In the Mapview we will get the use the users location to
      // get the initialRegion or figure out another way to get
      // general location

      <MapView
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {coordinate.map(item => (
          <MapView.Marker
            coordinate={{
              latitude: item.lat,
              longitude: item.lng
            }}
            title={"title"}
            description={"description"}
          />
        ))}
      </MapView>
    );
  }
}
// <Callout>
//   <View>
//     <TextInput placeholder={"Search"} />
//   </View>
// </Callout>;
// latitude: 37.78825, longitude: -122.4324
// lattitude: 37.78814, longitude: -122.39258;
// lattitude: 37.80228, longitude: -122.405853;
// lattitude: 37.79519, longitude: -122.39559;
// const styles = StyleSheet.create({
//   calloutView: {
//     flexDirection: "row",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     borderRadius: 10,
//     width: "40%",
//     marginLeft: "30%",
//     marginRight: "30%",
//     marginTop: 20
//   },
//   calloutSearch: {
//     borderColor: "transparent",
//     marginleft: 10,
//     width: "90%",
//     marginRightL: 10,
//     height: 40,
//     borderWidth: 0.0
//   }
// });
