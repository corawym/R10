import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Session from './Session';

class SessionContainer extends Component {

  constructor() {
    super();
  }

  static propTypes = {

  }

  render(){
    return(
      <Session/>
    )
  }
}

export default SessionContainer;