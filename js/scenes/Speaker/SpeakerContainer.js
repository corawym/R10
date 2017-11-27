import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Speaker from './Speaker';
import Loader from '../../components/Loader';

class SpeakerContainer extends Component {
  static propTypes = {

  }

  render(){
    const { speakerData } = this.props;
    console.log(speakerData)
    return (

        <Speaker speakerData={speakerData} />

    )
  }
}



export default SpeakerContainer
