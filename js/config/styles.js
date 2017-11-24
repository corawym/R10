import { Platform, StyleSheet } from 'react-native';

export const colors = {
  red: '#cf392a',
  purple: '#9963ea',
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',

};

// import { colors } from './config/styles'
// colors.red

export const typography = {
  fontLight: 'Montserrat-Light',

  ...Platform.select({
    ios: {
      fontRegular: 'Montserrat' 
    },
    android: {
      fontRegular: 'Montserrat-Regular'
    },
  }),
}

export const textSizes = {
  title1: 22,
  title2: 20,
  title3: 17,
  bodyL: 16,
  body: 15,
  subhead: 14,
  tabBar: 12
}

export const margins = {
  marginS: 8, 
  marginL: 20
}