import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  screenMargin: {
    margin: margins.marginS
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: margins.marginL
  },
  baseText: {
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL
  },
  aboutTitle: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginL
  },
  conductTitle: {
    color: colors.purple,
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL
  },
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