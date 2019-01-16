import React from 'react';
import PropTypes from 'prop-types';
import { Root } from 'react-static';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import './App.scss';

import Pages from '../Pages/Pages';

import { setPreviousRoute, setWindowSize, setLayout, batchActions } from '../../redux/modules/app';

import checkProps from '../../util/check-props';
import settings from '../../data/settings';
import layout from '../../util/layout';
import usePassiveEvent from '../../util/use-passive-event';

class App extends React.PureComponent {
  componentDidMount() {
    // Setup performance measure tooling
    if (process.env.NODE_ENV !== 'production') {
      const { whyDidYouUpdate } = require('why-did-you-update');

      if (document.location.search.indexOf('performance') >= 0) {
        whyDidYouUpdate(React);
      }
    }

    window.addEventListener('resize', this.handleResize, usePassiveEvent());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.setPreviousRoute(prevProps.location.pathname);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = debounce(() => {
    this.props.setLayout(window.innerWidth, window.innerHeight, layout.all);
  }, settings.resizeDebounceTime);

  render() {
    return (
      <Root>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Pages />
        </div>
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    ready: state.preloader.ready
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPreviousRoute: val => dispatch(setPreviousRoute(val)),
    setLayout: (width, height, layout) => dispatch(batchActions([setWindowSize({ width, height }), setLayout(layout)]))
  };
};

App.propTypes = checkProps({
  layout: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
  setPreviousRoute: PropTypes.func.isRequired,
  setLayout: PropTypes.func.isRequired
});

App.defaultProps = {};

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
