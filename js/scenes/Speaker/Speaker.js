import React from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight, Platform, Linking, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { closeSpeaker } from '../../lib/navigationHelpers';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.screenWrapper}>

      <View style={styles.navHeaderWrapper}>
        <TouchableHighlight onPress={() => closeSpeaker()}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            color="white"
            size={Platform.OS === 'ios' ? 40 : 20}
            style={styles.navIcon}
          />
        </TouchableHighlight>
        <Text style={styles.navHeader}>About the Speaker</Text>
      </View>

      <View style={styles.speakerWrapper}>
        <View style={styles.speakerInfoWrapper}>
          <Image
            style={styles.speakerImage}
            source={{ uri: speakerData.image }}
          />
          <Text style={styles.speakerName}>{speakerData.name}</Text>
        </View>
        <Text style={styles.speakerBio}>{speakerData.bio}</Text>

        <TouchableOpacity onPress={() => Linking.openURL(`${speakerData.url}`)}>
          <View>
            <CustomButton btnText="Read More on Wikipedia" />
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired,
};

export default Speaker;
