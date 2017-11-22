import React, { Component } from 'react';
import { SectionList, ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';



const SessionList = ({data}) => {
  console.log(data);
  return(
    <SectionList
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )  
      }}
      renderSectionHeader={({section}) => {
        return (
          <Text>{moment(section.title).format('LT')}</Text>
        )  
      }}
      sections={data}
    />

  )
}

SessionList.propTypes = {
  data: PropTypes.array.isRequired
}

export default SessionList;