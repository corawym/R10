import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  // LayoutAnimation,
  // TouchableOpacity,
  // Platform,
  // UIManager
} from 'react-native';

import Separator from '../../components/Separator';
import ConductItem from '../../components/ConductItem';
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
        <Separator/>
        <View style={styles.aboutIntroWrapper}>
          <Text style={styles.baseText}>R10 is a conference that focuses on just about any topics related to dev.</Text>
          <Text style={styles.aboutTitle}>Date & Venue</Text>
          <Text style={styles.baseText}>The R10 conference will take place on Tuesday, June 27,2017 in Vancouver, BC.</Text>
        </View>

        <View>
          <Text style={styles.aboutTitle}>Code of Conduct</Text>
          {
            data.map((item, index) => {
              return <ConductItem key={index} data={item} />
            })
          }
        </View>

        <Separator/>
        <Text style={styles.footer}>© RED Academy 2017</Text>

      </View>  
    </ScrollView>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired
}

export default About;