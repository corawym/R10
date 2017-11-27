import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';
import Loader from '../../components/Loader';

class SpeakerContainer extends Component {
  static propTypes = {
    speakerData: PropTypes.object.isRequired
  }

  render(){
    const { speakerData } = this.props;
    return (
      <Speaker speakerData={speakerData} />
    )
  }
}

export default SpeakerContainer
