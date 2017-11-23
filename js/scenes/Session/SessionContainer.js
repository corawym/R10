import React, { Component } from 'react';
import { View } from 'react-native';

import Session from './Session';

import { styles } from './styles';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  render() {
    const { sessionData } = this.props;
    return (
      <View style={styles.sessionContainer}>
        <Session sessionData={sessionData}/>
      </View>
    );
  }
}

export default SessionContainer;