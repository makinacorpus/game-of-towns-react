import React, { Component } from 'react';
import * as L from 'leaflet';
import './index.css';

class Map extends Component {
  constructor() {
    super();

    this.state = {
      map: null
    };
  }

  componentDidMount() {
    let map;
    const center = this.props.center;
    const mapContainer = this.refs.map;
    const layers = [
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })
    ];
    const mapCenter = center ? [center[1], center[0]] : [51.505, -0.09];
    const options = {
      center: mapCenter,
      zoom: 13,
      layers: layers
    };

    map = L.map(mapContainer, options);
    this.setState({
      map: map
    });
  }

  render() {
    return(
      <div className="got-map" ref={'map'}></div>
    );
  }
}

export default Map;