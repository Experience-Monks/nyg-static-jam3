import React from 'react';
import ReactDOM from 'react-dom';

// Your top level component
import App from './components/App/App';
import { isDev } from './config';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (isDev) {
  const target = document.getElementById('root');
  const classes = require('./util/detect').classes;
  document.body.className = [...document.body.className.split(' '), ...classes].filter(Boolean).join(' ');

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  const render = Component => {
    renderMethod(<Component />, target);
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./components/App/App', () => render(<App />));
  }
}
