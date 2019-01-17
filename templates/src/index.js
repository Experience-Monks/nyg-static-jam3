import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';

// Your top level component
import App from './components/App/App';

import { isNode } from './config';

const ConnectedComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Export your top level component as JSX (for static rendering)
export default ConnectedComponent;

// Render your app
if (!isNode) {
  if (process.env.NODE_ENV !== 'production' && window.location.href.indexOf('?nostat') === -1)
    require('./util/stats')();

  const target = document.getElementById('root');
  const classes = require('./util/detect').classes;
  document.body.className = [...document.body.className.split(' '), ...classes].filter(Boolean).join(' ');

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  const render = Component => {
    renderMethod(Component, target);
  };

  // Render!
  render(<ConnectedComponent />);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./components/App/App', () => render(<ConnectedComponent />));
  }
}
