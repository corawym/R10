import React, { Component } from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const About = ({data}) => {
  console.log(data)
  return(
    <ScrollView>
      <View style={styles.screenMargin}>

        <View style={styles.center}>
          <Image
            style={styles.logoImage}
            resizeMode={"contain"}
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>

        {/*ItemSeparatorComponent = {() => <View style={styles.separator}/>}*/}
        
        <Text style={styles.marginBottom}>R10 is a conference that focuses on just about any topics related to dev.</Text>
        
        <View style={styles.marginBottom}>
          <Text style={styles.marginBottom}>Date & Venue</Text>
          <Text>The R10 conference will take place on Tuesday, June 27,2017 in Vancouver, BC.</Text>
        </View>
        
        <View style={styles.marginBottom}>
          <Text style={styles.marginBottom}>Code of Conduct</Text>
          <FlatList
            data={data}
            renderItem={({item}) =>
            <View style={styles.marginBottom}>
              <Text style={styles.marginBottom}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>  
            }
          />
        </View>
        
      </View>  
    </ScrollView>
  )
}

About.propTypes = {

}

export default About;