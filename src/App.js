import React, { Component } from 'react';
import CityForm from './CityForm';
import './App.css';

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
        </div>
      </div>
    );
  }
}

export default App;
