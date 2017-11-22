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
            <View>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )  
      }}
      renderSectionHeader={({section}) => {
        return (
          <Text>{moment.unix(section.title).format('LT')}</Text>
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