import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

//TODO new LPSMarker({device: "P60NL....", lat:, long...})
export default class LPSMarker{
  constructor(title, image, coordinate) {
    this.title = title + Math.random() + new Date();
    this.image = image;

    this.coordinate = coordinate;
  }


}
