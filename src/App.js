import React, { Component } from "react";
import "./App.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import ReactTooltip from "react-tooltip"
// import MultipleMarker from "./leaflet-test/MultipleMarker";

export default class SimpleExample extends Component {
  state = {
    lat: -6.914744,
    lng: 107.60981,
    zoom: 9
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
