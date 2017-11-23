import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { styles } from './styles';


const Session = ({sessionData}) => {
  console.log(sessionData)
  return (
    <View>
      <Text style={styles.subheadLocation}>{sessionData.location}</Text>
      <Text style={styles.title}>{sessionData.title}</Text>
      <Text style={styles.subheadTime}>{moment.unix(sessionData.start_time).format('LT')}</Text>
      <Text style={styles.body}>{sessionData.description}</Text>

      <Text>{sessionData.speaker}</Text>
    </View>
  )
};

Session.PropTypes ={
  sessionData: PropTypes.array.isRequired
}

export default Session;