import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import EllipsMarker from "./markers/EllipsMarker";
import AlertairTSMarker from "./markers/AlertairTSMarker";
import MyLocationMapMarker from "./markers/MyLocationMapMarker";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
      ]
    };
  }

  newMarker(coordinate) {
    if(parseInt(Math.random() * 1000) % 2 == 0) {
      return new EllipsMarker("title", coordinate)
    }
    return new AlertairTSMarker("title2", coordinate)
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        this.newMarker(e.nativeEvent.coordinate)
      ],
    });
  }

  render() {
    return (
      <MapView
        style={styles.map}
        onPress={(e) => this.onMapPress(e)}>
          <MyLocationMapMarker
            key="my_location"
            title="MyPosition" />
          {this.state.markers.map(marker => (
            <MapView.Marker
            title={marker.title}
            image={marker.image}
            key={marker.title}
            coordinate={marker.coordinate}/>
          ))
        }
        <MapView.UrlTile urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapView>
    );
  }
}

Map.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = Map;
