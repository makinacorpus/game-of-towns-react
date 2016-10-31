import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import './CityForm.css';

class CityForm extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: null
    };

    this.selectCity = this.selectCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(evt) {
    evt.preventDefault();
    const town = this.state.selectedCity;

    if (town) {
      this.props.onSubmit(town);
    }
  }

  render() {
    const selectedCity = this.state.selectedCity;
    return(
      <form className="city-add" onSubmit={this.onSubmit}>
        <label>
          <p>Ajouter une ville au comparateur</p>
          <AutoComplete
            name={'city'}
            placeholder={'Ville'}
            onSelect={this.selectCity}/>
        </label>
        <button
          type="submit"
          disabled={!selectedCity}
          className={!selectedCity ? 'disabled' : ''}>
          Ajouter
        </button>
      </form>
    );
  }
}

export default CityForm;