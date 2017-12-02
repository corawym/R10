import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const GradientBackground = ({ colors, gradientStyles, children }) => (
  <LinearGradient
    start={{ x: 0.9, y: 0 }}
    end={{ x: 0.3, y: 1.0 }}
    locations={[0, 1]}
    colors={colors}
    style={gradientStyles}>
    {children}
  </LinearGradient>
);

GradientBackground.propTypes = {
  colors: PropTypes.array.isRequired,
  gradientStyles: PropTypes.number.isRequired,
  children: PropTypes.any,
};

export default GradientBackground;
