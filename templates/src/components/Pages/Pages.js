import React from 'react';
import { Routes } from 'react-static';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { setPreviousRoute } from '../../redux/modules/app';

import checkProps from '../../util/check-props';

class Pages extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.setPreviousRoute(prevProps.location.pathname);
    }
  }

  render() {
    return (
      <main className={classnames('Pages', this.props.className)} role="main">
        <Routes />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setPreviousRoute: val => dispatch(setPreviousRoute(val))
  };
};

Pages.propTypes = checkProps({
  className: PropTypes.string,
  setPreviousRoute: PropTypes.func.isRequired
});

Pages.defaultProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pages)
);
