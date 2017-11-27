import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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

export default GradientBackground;