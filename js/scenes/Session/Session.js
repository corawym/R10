import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { createFaves, deleteFaves } from '../../config/models';

import Separator from '../../components/Separator';
import CustomButton from '../../components/CustomButton';
import { goToSpeaker } from '../../lib/navigationHelpers';
import styles from './styles';
import { colors } from '../../config/styles';

const Session = ({ sessionData, speakerData, favesData }) => {
  const faved = favesData.indexOf(sessionData.session_id) > -1;
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
        <View style={styles.subheadWrapper}>
          <Text style={styles.subheadLocation}>{sessionData.location}</Text>
          {
            faved ?
              <Icon
                name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                color={colors.red}
                size={14}
              />
            : false
          }
        </View>

        <Text style={styles.title}>{sessionData.title}</Text>
        <Text style={styles.subheadTime}>{moment.unix(sessionData.start_time).format('LT')}</Text>
        <Text style={styles.body}>{sessionData.description}</Text>

        <Text style={styles.subheadPresent}>Presented by:</Text>
      </View>
      {
        speakerData ?
          <TouchableHighlight
            onPress={() => goToSpeaker(speakerData)}
            underlayColor={colors.underlayGrey}
          >
            <View>
              <View style={styles.speakerWrapper}>
                <Image
                  style={styles.speakerImage}
                  source={{ uri: speakerData.image }}
                />
                <Text style={styles.subheadPresenter}>{speakerData.name}</Text>
              </View>
            </View>
          </TouchableHighlight>
        : false
      }

      <View style={styles.separatorWrapper}>
        <Separator />
      </View>
      <TouchableOpacity
        onPress={faved ?
          () => deleteFaves(sessionData.session_id) :
          () => createFaves(sessionData.session_id)}
      >
        <View>
          <CustomButton btnText={faved ? 'Remove from Faves' : 'Add to Faves'} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

Session.PropTypes = {
  sessionData: PropTypes.array.isRequired,
  speakerData: PropTypes.object,
  favesData: PropTypes.array.isRequired,
};

export default Session;
