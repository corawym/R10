import React, { Component } from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';


const About = ({data}) => {

  return(
    <ScrollView>
      <View style={styles.screenMargin}>

        <View style={styles.imageWrapper}>
          <Image
            style={styles.logoImage}
            resizeMode={"contain"}
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>

        {/*ItemSeparatorComponent = {() => <View style={styles.separator}/>}*/}
        
        <Text style={styles.baseText}>R10 is a conference that focuses on just about any topics related to dev.</Text>
        
        <Text style={styles.aboutTitle}>Date & Venue</Text>
        <Text style={styles.baseText}>The R10 conference will take place on Tuesday, June 27,2017 in Vancouver, BC.</Text>
        <View>
          <Text style={styles.aboutTitle}>Code of Conduct</Text>
          <FlatList
            data={data}
            renderItem={({item}) =>
            <View>
              <Text style={styles.conductTitle}>{item.title}</Text>
              <Text style={styles.baseText}>{item.description}</Text>
            </View>  
            }
          />
        </View>

      </View>  
    </ScrollView>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired
}

export default About;