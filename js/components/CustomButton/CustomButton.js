import React, { Component } from 'react';
import { View, Text } from 'react-native';

import GradientBackground from '../GradientBackground';
import { styles } from './styles';
import { colors } from '../../config/styles';

const CustomButton = ({btnText}) => (
  <View style={styles.buttonWrapper}>
      
    <GradientBackground colors={[colors.blue, colors.purple]} gradientStyles={styles.buttonBg}>
      <Text style={styles.buttonText}>{btnText}</Text>
    </GradientBackground>

  </View>
);

export default CustomButton;