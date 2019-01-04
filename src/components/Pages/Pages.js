import React from 'react';
import { withRouter } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types';
import classnames from 'classnames';

import checkProps from '../../util/check-props';
import './Pages.css';

class Pages extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main className={classnames(`Pages`, this.props.className)} role="main">
        <Routes />
      </main>
    );
  }
}

Pages.propTypes = checkProps({
  className: PropTypes.string
});

Pages.defaultProps = {
  className: ''
};

export default withRouter(Pages);
