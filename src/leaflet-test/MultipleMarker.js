import React, { Components } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  ScaleControl
} from "react-leaflet";

class MultipleMarker extends React.Components {
  constructor() {
    super();
    this.state = {
      markers: [[-6.861768, 107.592712]]
    };
  }

  addMarker = e => {
    const { markers } = this.state;
    markers.push(e.latlng);
    this.setState({ markers });
  };

  render() {
    return (
      <Map center={[-6.861768, 107.592712]} onClick={this.addMarker} zoom={13}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.state.markers.map((position, idx) => (
          <Marker key={`marker-${idx}`} position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}
