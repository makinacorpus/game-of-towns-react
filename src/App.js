import React, { Component } from 'react';
import './App.css';

class App extends Component {

  addTown(evt) {
    const town = evt.target.value;
    console.log(town);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Game of towns</h2>
        </div>
        <div className="App-content">
          <form>
            <label>
              <p>Ajouter une ville au comparateur</p>
              <input placeholder={'Ville'} type="text" onChange={this.addTown} />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
