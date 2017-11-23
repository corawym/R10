import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { goToSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';

const Session = ({sessionData, speakerData}) => {
  return (
    <View style={styles.sessionContainer}>
      <Text style={styles.subheadLocation}>{sessionData.location}</Text>
      <Text style={styles.title}>{sessionData.title}</Text>
      <Text style={styles.subheadTime}>{moment.unix(sessionData.start_time).format('LT')}</Text>
      <Text style={styles.body}>{sessionData.description}</Text>

      <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
        <Text>{speakerData.name}</Text>
      </TouchableHighlight>
    </View>
  )
};

Session.PropTypes ={
  sessionData: PropTypes.array.isRequired
}

export default Session;