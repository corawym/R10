import React from 'react';
import { SectionList, ListItem, View, Text, TouchableHighlight, Platform, ItemSeparatorComponent } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSession } from '../../lib/navigationHelpers';
import Separator from '../Separator';
import { styles } from './styles';
import { colors } from '../../config/styles';


const SessionList = ({data, currentNavigatorUID}) => {
  return(
    <SectionList
      renderItem={({item,index}) => {
        return (
          <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, item)} underlayColor={colors.underlayGrey}>
            <View>
              <View style={styles.contentWrapper}>
                <Text style={styles.sessionTitle}>{item.title}</Text>

                <View style={styles.sessionSubtitleWrapper}>
                  <Text style={styles.sessionSubtitle}>{item.location}</Text>
                  <Icon 
                    name={ Platform.OS === 'ios' ? "ios-heart" : "md-heart" } 
                    color={colors.red}
                    size={14}>  
                  </Icon>
                </View>
                
              </View>
              <Separator />
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
      keyExtractor={(item, index) => index}
    />

  )
}

SessionList.propTypes = {
  data: PropTypes.array.isRequired
}

export default SessionList;