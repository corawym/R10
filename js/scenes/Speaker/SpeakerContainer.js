import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

  constructor() {
    super();
  }

  static propTypes = {

  }

  render(){
    return(
      <Speaker/>
    )
  }
}

export default SpeakerContainer;