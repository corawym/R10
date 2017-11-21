import { StyleSheet } from 'react-native';

import { brandColors } from '../../config/styles';

export const styles = StyleSheet.create({
  // styles go here
  logoImage: {
    width: 200, 
    height: 70
  },
  separator: {
    flex: 1,
    backgroundColor: brandColors.lightGrey,
    height: StyleSheet.hairlineWidth
  },
});