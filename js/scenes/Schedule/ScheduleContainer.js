import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  constructor() {
    super();
  }

  static propTypes = {

  }

  render(){
    return(
      <Schedule />
    )
    
  }
}

export default ScheduleContainer;