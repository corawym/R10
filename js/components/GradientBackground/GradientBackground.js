import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { colors } from '../../config/styles';

const GradientBackground = ({colors, gradientStyles, children}) => {
  return (
    <LinearGradient 
      start={{x: 0.9, y: 0}} 
      end={{x: 0.3, y: 1.0}}
      locations={[0,1]}
      colors={colors}
      style={gradientStyles}>
      {children}
    </LinearGradient>
  )
}

GradientBackground.PropTypes = {
  colors: PropTypes.string.isRequired,
  gradientStyles: PropTypes.object.isRequired,
  children: PropTypes.any
}


export default GradientBackground;