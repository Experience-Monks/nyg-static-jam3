import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import './util/polyfills';
import './style/global.css';
import gaTrack from './util/ga-track';
import App from './components/App/App';
import { isDev, isBrowser, gaTrackingId } from './config';

export default App;

if (isBrowser) {
  gaTrack.initialize(gaTrackingId);
  require('lazysizes').init();
  const classes = require('./util/detect').classes;
  document.documentElement.classList.add(...classes);
  const render = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  render(<App />, document.getElementById('root'));

  if (isDev && !/nostat/.test(window.location.search)) {
    require('./util/stats')();
  }
}
