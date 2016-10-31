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
    const mapContainer = this.refs.map;
    const layers = [
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })
    ];
    const options = {
      center: [51.505, -0.09],
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