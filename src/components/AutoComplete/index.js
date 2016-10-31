import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import './index.css'

class AutoComplete extends Component {

  constructor() {
    super();

    this.state = {
      autoComplete: null,
      inputValue: ''
    };

    this.autoComplete = this.autoComplete.bind(this);
    this.getCompletion = debounce(this.getCompletion.bind(this), 500);
    this.selectCompletion = this.selectCompletion.bind(this);
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
      inputValue: query
    });
    if (query.length >= 3) {
      this.getCompletion(query);
    } else {
      this.setState({
        autoComplete: []
      });
    }
  }

  selectCompletion(elementKey) {
    const element = this.state.autoComplete[elementKey];
    this.setState({
      inputValue: element.properties.name,
      autoComplete: null
    }, () => {
      this.props.onSelect(element);
    });
  }

  renderAutoComplete(results) {
    return (
      <ul className="ac-results-list">
        {
          Object.keys(results).map(key =>
            <li
              className="ac-results-item"
              key={key}
              onClick={() => this.selectCompletion(key)}>
              {results[key].properties.name}
            </li>
          )
        }
      </ul>
    );
  }

  render() {
    const inputValue = this.state.inputValue;
    const acResult = this.state.autoComplete;
    const showAc = acResult ? Object.keys(acResult).length > 0 : false;
    const placeholder = this.props.placeholder ? this.props.placeholder : '';
    const name = this.props.name ? this.props.name : 'auto-complete';
    return (
      <div className="ac-input">
        <input
          className="ac-field"
          placeholder={placeholder}
          name={name}
          type="text"
          value={inputValue}
          onChange={this.autoComplete} />
        <div className="ac-results">
          { showAc ? this.renderAutoComplete(acResult) : null }
        </div>
      </div>
    );
  }
}

export default AutoComplete;