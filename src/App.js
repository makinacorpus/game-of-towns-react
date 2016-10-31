import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      towns: new Set([])
    };

    this.addTown = this.addTown.bind(this);
  }

  addTown(evt) {
    evt.preventDefault();
    const town = this.refs.town.value;

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
          <form className="city-add" onSubmit={this.addTown}>
            <label>
              <p>Ajouter une ville au comparateur</p>
              <AutoComplete/>
            </label>
            <button type="submit">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
