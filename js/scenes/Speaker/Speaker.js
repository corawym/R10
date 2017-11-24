import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Speaker = ({speakerData}) => {
  return(
    <View style={styles.screenWrapper}>
      <View>
        <Text>About the Speaker</Text>
      </View>

      <View style={styles.speakerWrapper}>
        <View style={styles.speakerInfoWrapper}>
          <Image 
            style={styles.speakerImage}
            source={{uri: speakerData.image}}
          />
          <Text style={styles.speakerName}>{speakerData.name}</Text>
        </View>
        <Text style={styles.speakerBio}>{speakerData.bio}</Text>

      </View>
    </View>
  )
}

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired
}

export default Speaker;