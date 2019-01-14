import React from 'react';
import { Routes } from 'react-static';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import checkProps from '../../util/check-props';

const Pages = ({ location, ...props }) => {
  return (
    <main className={classnames('Pages', props.className)} role="main">
      <Routes />
    </main>
  );
};

Pages.propTypes = checkProps({
  className: PropTypes.string
});

Pages.defaultProps = {};

export default withRouter(Pages);
