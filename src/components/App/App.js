import React, { Fragment } from 'react';
import debounce from 'lodash.debounce';
import { Provider } from 'react-redux';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import { isDev, isBrowser } from '../../config';

import settings from '../../data/settings';

import usePassiveEvent from '../../util/use-passive-event';

import store from '../../redux';
import { setWindowSize } from '../../redux/actions/app';

import Pages from '../Pages/Pages';
import Footer from '../Footer';
import Rotate from '../Rotate/Rotate';

const detect = isBrowser && require('../../util/detect');
const viewableSize = isBrowser && require('../../util/get-viewable-size').default;

class App extends React.PureComponent {
  componentDidMount() {
    // Setup performance measure tooling
    if (isDev && /performance/.test(window.location.search)) {
      const { whyDidYouUpdate } = require('why-did-you-update');
      whyDidYouUpdate(React);
    }

    if (!detect.isMobile || (detect.isiOS && detect.isChrome)) {
      window.addEventListener('resize', this.onResize, usePassiveEvent());
    }
    setTimeout(this.onResize);
  }

  onResize = debounce(() => {
    const viewableHeight = viewableSize().height;

    if (detect.isiOS && detect.isChrome && store.getState().app.window.height >= viewableHeight) return;

    const windowSize = { width: window.innerWidth, height: viewableHeight };
    store.dispatch(setWindowSize(windowSize));
  }, settings.resizeDebounceTime);

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Pages />
            </Fragment>
          </Router>
        </Provider>
        <Footer />
        {detect.isMobile && <Rotate />}
      </Fragment>
    );
  }
}

export default hot(module)(App);
