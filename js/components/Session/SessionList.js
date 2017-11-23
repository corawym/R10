import React from 'react';
import { SectionList, ListItem, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSession } from '../../lib/navigationHelpers';
import { styles } from './styles';


const SessionList = ({data, currentNavigatorUID}) => {
  return(
    <SectionList
      renderItem={({item}) => {
        return (
          <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, item)}>
            <View style={styles.contentWrapper}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionSubtitle}>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )  
      }}
      renderSectionHeader={({section}) => {
        return (
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionTime}>{moment.unix(section.title).format('LT')}</Text>
          </View>
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