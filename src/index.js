import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';

L.Icon.Default.imagePath = '/images/';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
