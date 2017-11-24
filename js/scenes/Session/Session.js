import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import Separator from '../../components/Separator';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';


const Session = ({sessionData, speakerData}) => {
  return (
    <View>
      <View style={styles.sessionContainer}>
        <View style={styles.subheadWrapper}>
          <Text style={styles.subheadLocation}>{sessionData.location}</Text>
          <Icon 
            name={ Platform.OS === 'ios' ? "ios-heart" : "md-heart" } 
            color={colors.red}
            size={14}>  
          </Icon>
        </View>

        <Text style={styles.title}>{sessionData.title}</Text>
        <Text style={styles.subheadTime}>{moment.unix(sessionData.start_time).format('LT')}</Text>
        <Text style={styles.body}>{sessionData.description}</Text>

        <Text style={styles.subheadPresent}>Presented by:</Text>
      </View>

      <TouchableHighlight onPress={() => goToSpeaker(speakerData)} underlayColor={colors.lightGrey}>
        <View>
          <View style={styles.speakerWrapper}>
            <Image 
              style={styles.speakerImage}
              source={{uri: speakerData.image}}
            />
            <Text style={styles.subheadPresenter}>{speakerData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <Separator/>
    </View>
  )
};

Session.PropTypes ={
  sessionData: PropTypes.array.isRequired
}

export default Session;