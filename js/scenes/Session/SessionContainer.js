import React, { Component } from 'react';

import Session from './Session';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  render() {
    const { sessionData } = this.props;
    return (
      <Session sessionData={sessionData}/>
    );
  }
}

export default SessionContainer;