import { StyleSheet } from 'react-native';

import { brandColors } from '../../config/styles';

export const styles = StyleSheet.create({
  // styles go here
  screenMargin: {
    margin: 16
  },
  marginTop: {
    marginTop: 20
  },
  marginBottom: {
    marginBottom: 20
  },
  center:{
    flex: 1,
    alignItems: 'center'
  },
  logoImage: {
    width: 200, 
    height: 50,
  },
  separator: {
    flex: 1,
    backgroundColor: brandColors.lightGrey,
    height: StyleSheet.hairlineWidth
  },
});