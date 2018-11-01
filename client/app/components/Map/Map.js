import React from "react";
import { MapView, Marker } from "expo";
import { AppRegistry } from "react-native";

const App = () => {
  constructor(props){
    super(props)
    this.state = {
      onRegionChange: "",
      region: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324
          },
          title: "A title works",
          description: "I really hope this works"
        }
      ]
    }
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </MapView>
    );
  }
}

export default App;


AppRegistry.registerComponent('albums', () => App);


// import React from "react";
// import { MapView, Marker } from "expo";
// import { AppRegistry } from "react-native";
//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       onRegionChange: "",
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324
//       },
//       markers: [
//         {
//           latlng: {
//             latitude: 37.78825,
//             longitude: -122.4324
//           },
//           title: "A title works",
//           description: "I really hope this works"
//         }
//       ]
//     };
//   }
//
//   render() {
//     return (
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//       >
//         <MapView
//           region={this.state.region}
//           onRegionChange={this.onRegionChange}
//         >
//           {this.state.markers.map(marker => (
//             <Marker
//               coordinate={marker.latlng}
//               title={marker.title}
//               description={marker.description}
//             />
//           ))}
//         </MapView>
//       </MapView>
//     );
//   }
// }

// import * as React from "react";
// import { MapView } from "expo";
//
// export default class Map extends React.Component {
//   render() {
//     return (
//       <MapView
//         style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//       >
//         <MapView.Marker
//           coordinate={{
//             latitude: 37.78825,
//             longitude: -122.4324
//           }}
//         />
//       </MapView>
//     );
//   }
// }
