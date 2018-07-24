import React, { Components } from "react";
import {
  Circle,
  CircleMarker,
  Map,
  Marker,
  Popup,
  TileLayer,
  Tooltip
} from "react-leaflet";

export default class LeafletTooltip extends Components {
  state = {
    clicked: 0
  };

  onClickCircle = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  render() {
    const center = [-6.861768, 107.592712];

    const clickedText =
      this.state.clicked === 0
        ? "Click"
        : `Circle click: ${this.state.clicked}`;

    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          fillColor="Red"
          onClick={this.onClickCircle}
          radius={200}
        >
          <Tooltip>{clickedMarker}</Tooltip>
        </Circle>
      </Map>
    );
  }
}
