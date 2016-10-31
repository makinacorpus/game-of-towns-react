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

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Game of towns</h2>
        </div>
        <div className="App-content">
          <CityForm onSubmit={this.addTown}/>
          <div style={{height: '500px', width: '500px'}}>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
