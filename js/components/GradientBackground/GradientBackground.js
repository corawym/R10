import React from 'react';
import Gradient from 'react-native-linear-gradient';

import { styles } from './styles';

const GradientBackground = () => {
  return (
    <LinearGradient 
      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
      locations={[0,0.5,0.6]}
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
    </LinearGradient>
  )
}

export default GradientBackground;