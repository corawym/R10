import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import CustomButton from '../../components/CustomButton';
import { styles } from './styles';

const Speaker = ({speakerData}) => {
  return(
    <ScrollView style={styles.screenWrapper}>
      <View>
        <Text style={styles.navHeader}>About the Speaker</Text>
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

        <TouchableHighlight>
        <View> 
          <CustomButton btnText='Read More on Wikipedia'/>
        </View>
      </TouchableHighlight>

      </View>

      

    </ScrollView>
  )
}

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired
}

export default Speaker;