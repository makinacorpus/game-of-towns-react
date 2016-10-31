import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      towns: new Set([]),
      autoComplete: null,
      cityInput: ''
    };

    this.addTown = this.addTown.bind(this);
    this.autoComplete = this.autoComplete.bind(this);
    this.getCompletion = debounce(this.getCompletion.bind(this), 500);
    this.selectCity = this.selectCity.bind(this);
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

  getCompletion(query) {
    const url = `http://photon.komoot.de/api/?q=${query}&limit=5`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          autoComplete: json.features
        });
      })
      .catch(err => console.error(err));
  }

  autoComplete(evt) {
    const query = evt.target.value;
    this.setState({
      cityInput: query
    });
    if (query.length >= 3) {
      this.getCompletion(query);
    }
  }

  selectCity(cityKey) {
    const city = this.state.autoComplete[cityKey];
    this.setState({
      cityInput: city.properties.name
    }, () => {this.getCompletion(city.properties.name)});
  }

  renderAutoComplete(results) {
    return (
      <ul className="ac-results-list">
        {
          Object.keys(results).map(key =>
            <li key={key} onClick={() => this.selectCity(key)}>
              {results[key].properties.name}
            </li>
          )
        }
      </ul>
    );
  }

  render() {
    console.log(this.state);
    const cityInput = this.state.cityInput;
    const acResult = this.state.autoComplete;
    const showAc = acResult ? Object.keys(acResult).length > 0 : false;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Game of towns</h2>
        </div>
        <div className="App-content">
          <form onSubmit={this.addTown}>
            <label>
              <p>Ajouter une ville au comparateur</p>
              <div className="ac-input">
                <input
                  className="ac-field"
                  placeholder={'Ville'}
                  type="text"
                  ref={'town'}
                  value={cityInput}
                  onChange={this.autoComplete} />
                <div className="ac-results">
                  { showAc ? this.renderAutoComplete(acResult) : null }
                </div>
              </div>
              <input type="submit" value="Ajouter" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
