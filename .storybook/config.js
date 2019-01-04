import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, addDecorator } from '@storybook/react';

import store from '../src/redux';

const req = require.context('../src/components', true, /\-story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <Provider store={store}>
    <Router>
      <div style={{ width: '100%', height: '100%' }}>{story()}</div>
    </Router>
  </Provider>
));

require('lazysizes').init();

configure(loadStories, module);
