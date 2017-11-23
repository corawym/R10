import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Session from './Session';
import { getSpeaker } from '../../redux/modules/speaker'

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount = () => {
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
  }
  render() {
    const { sessionData, speakerData } = this.props;
    return (
      <View>
        <Session sessionData={sessionData} speakerData={speakerData} />
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    speakerData: store.speaker.speakerData
  }
}

export default connect(mapStateToProps)(SessionContainer);