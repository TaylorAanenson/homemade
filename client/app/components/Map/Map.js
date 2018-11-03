import * as React from "react";
import { MapView, TextInput } from "expo";
import { coordinate } from "./coordinates";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList,
  ScrollView,
  AsyncStorage
} from "react-native";

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
