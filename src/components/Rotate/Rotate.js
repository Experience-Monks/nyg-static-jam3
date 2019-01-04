import React from 'react';
import PropTypes from 'prop-types';

import './Rotate.css';

import { isBrowser } from '../../config';
import RotateDevice from '../SvgComponents/rotate-device.svg';

const detect = isBrowser && require('../../util/detect').default;

class Rotate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orientation: detect.orientation
    };
  }

  componentDidMount() {
    if (detect.isMobile) {
      this.containter.addEventListener('touchmove', this.blockTouch, { passive: false });
      window.addEventListener('visibilitychange', this.handleOrientationChange);
      if (detect.isAndroid) {
        window.addEventListener('orientationchange', this.handleOrientationChange);
      } else {
        window.addEventListener('resize', this.handleOrientationChange);
      }
    }
  }

  componentWillUnmount() {
    if (this.container) this.containter.removeEventListener('touchmove', this.blockTouch, { passive: false });
    window.removeEventListener('visibilitychange', this.handleOrientationChange);
    if (detect.isAndroid) {
      window.removeEventListener('orientationchange', this.handleOrientationChange);
    } else {
      window.removeEventListener('resize', this.handleOrientationChange);
    }
  }

  handleOrientationChange = () => {
    if (detect.orientation !== this.state.orientation) {
      this.setState({ orientation: detect.orientation });
    }
  };

  blockTouch = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const isPortrait = this.state.orientation === 'portrait';
    const visible = (this.props.portrait && !isPortrait) || (!this.props.portrait && isPortrait);
    const style = {
      visibility: visible ? 'visible' : 'hidden'
    };

    return (
      <div className="Rotate" style={style} ref={r => (this.containter = r)}>
        <div className="container">
          <img src={RotateDevice} className="rotate-icon" alt="" />
          <p>Rotate your device</p>
        </div>
      </div>
    );
  }
}

Rotate.propTypes = {
  portrait: PropTypes.bool
};

Rotate.defaultProps = {
  portrait: true
};

export default Rotate;
