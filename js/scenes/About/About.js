import React, { Component } from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const About = ({data}) => {
  console.log(data)
  return(
    <ScrollView>

      <Image
        style={styles.logoImage}
        resizeMode={"contain"}
        source={require('../../assets/images/r10_logo.png')}
      />

      {/*ItemSeparatorComponent = {() => <View style={styles.separator}/>}*/}
        <Text>R10 is a conference that focuses on just about any topics related to dev.</Text>
        <Text>Date & Venue</Text>
        <Text>The R10 conference will take place on Tuesday, June 27,2017 in Vancouver, BC.</Text>
        <Text>Code of Conduct</Text>
        
        <FlatList
          data={data}
          renderItem={({item}) =>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>  
          }
        />
    </ScrollView>
  )
}

About.propTypes = {

}

export default About;