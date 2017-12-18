import LPSMarker from "./LPSMarker";

import flag_blue_img from '../../assets/flag-blue.png';

export default class EllipsMarker extends LPSMarker {
  constructor(title, coordinate) {
    super(title, flag_blue_img, coordinate);
  }
}
