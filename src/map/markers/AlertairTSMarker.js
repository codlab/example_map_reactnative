import LPSMarker from "./LPSMarker";

import flag_pink_img from '../../assets/flag-pink.png';

export default class AlertairTSMarker extends LPSMarker {
  constructor(title, coordinate) {
    super(title, flag_pink_img, coordinate);
  }
}
