import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const Session = ({sessionData}) => {
  console.log(sessionData)
  return (
    <View>
      <Text>{sessionData.location}</Text>
      <Text>{sessionData.title}</Text>
      <Text>{moment.unix(sessionData.start_time).format('LT')}</Text>
      <Text>{sessionData.description}</Text>
      
      <Text>{sessionData.speaker}</Text>
    </View>
  )
};

Session.PropTypes ={
  sessionData: PropTypes.array.isRequired
}

export default Session;