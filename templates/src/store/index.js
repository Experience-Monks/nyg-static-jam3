import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, connectRouter } from 'react-router-redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import keys from './keys';

import reducerRegistry from './reducer-registry';

import preloaderReducer from './modules/preloader';
import mainNavReducer from './modules/main-nav';
import { isNode } from '../config';

import { windowSizeReducer, previousRouteReducer, layoutReducer } from './modules/app';

export const history = !isNode ? require('history/createBrowserHistory').default() : undefined;

let store;
const initialState = {};
const enhancers = [];

const defaultReducers = {
  preloader: preloaderReducer,
  windowSize: windowSizeReducer,
  previousRoute: previousRouteReducer,
  layout: layoutReducer,
  isMobileMenuOpen: mainNavReducer,
  routing: routerReducer
  // router: connectRouter(history)
};

// Reducers
const enableBatchActions = reducers => {
  return function(state, action) {
    switch (action.type) {
      case keys.BATCH_ACTIONS:
        return action.actions.reduce(reducers, state);
      default:
        return reducers(state, action);
    }
  };
};

const combine = reducers => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return enableBatchActions(combineReducers(reducers));
};

function createInitialReducer() {
  reducerRegistry.reducers = defaultReducers;
  return combine(defaultReducers);
}

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

// Enhancers
if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

// enhancers.push(applyMiddleware(routerMiddleware(history)));

const composedEnhancers = compose(...enhancers);

// Configure Store
function configureStore() {
  store = createStore(createInitialReducer(), initialState, composedEnhancers);
  return store;
}

export default configureStore();
