import { StyleSheet } from 'react-native';

import { brandColors } from '../../config/styles';

export const styles = StyleSheet.create({
  // global styles 
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
  // baseText:{
  //   fontSize: 20,
  //   color: brandColors.MediumGrey
  // },
  // about scene styles
  logoImage: {
    width: 200, 
    height: 50,
  },
  // separator: {
  //   flex: 1,
  //   backgroundColor: brandColors.lightGrey,
  //   height: StyleSheet.hairlineWidth
  // },
});