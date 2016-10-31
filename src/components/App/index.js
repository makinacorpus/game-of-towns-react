import React, { Component } from 'react';
import CityForm from '../CityForm';
import Map from '../Map';
import './index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      towns: new Set([])
    };

    this.addTown = this.addTown.bind(this);
  }

  addTown(town) {
    if (town) {
      const newSet = new Set(this.state.towns);
      newSet.add(town);
      this.setState({
        towns: newSet
      });
    }
  }

  renderMapGrid(towns) {
    console.log(towns);
    const maps = [];
    towns.forEach(town => {
      maps.push(
        <Map
          key={town.properties.osm_id}
          center={town.geometry.coordinates}/>
      )
    });
    console.log(maps);
    return (
      <div className="got-map-grid">
        {maps}
      </div>
    );
  }

  render() {
    console.log(this.state);
    const towns = this.state.towns;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Game of towns</h2>
        </div>
        <div className="App-content">
          <CityForm onSubmit={this.addTown}/>
          {this.renderMapGrid(towns)}
        </div>
      </div>
    );
  }
}

export default App;
