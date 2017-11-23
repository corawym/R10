import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Speaker = ({speakerData}) => {
  return(
    <Text>{speakerData.name}</Text>
  )
}

Speaker.propTypes = {
  
}

export default Speaker;