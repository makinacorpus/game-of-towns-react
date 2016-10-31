import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      towns: new Set([]),
      selectedCity: null
    };

    this.addTown = this.addTown.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }

  addTown(evt) {
    evt.preventDefault();
    const town = this.state.selectedCity;

    if (town) {
      const newSet = new Set(this.state.towns);
      newSet.add(town);
      this.setState({
        towns: newSet
      });
    }
  }

  selectCity(city) {
    if (city) {
      this.setState({
        selectedCity: city
      });
    } else {
      this.setState({
        selectedCity: null
      });
    }
  }

  render() {
    console.log(this.state);
    const selectedCity = this.state.selectedCity
    return (
      <div className="App">
        <div className="App-header">
          <h2>Game of towns</h2>
        </div>
        <div className="App-content">
          <form className="city-add" onSubmit={this.addTown}>
            <label>
              <p>Ajouter une ville au comparateur</p>
              <AutoComplete
                name={'city'}
                placeholder={'Ville'}
                selectCity={this.selectCity}/>
            </label>
            <button
              type="submit"
              disabled={!selectedCity}
              className={!selectedCity ? 'disabled' : ''}>
              Ajouter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
