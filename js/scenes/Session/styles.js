import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  title: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginL
  },
  body: {
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL
  },
  subheadLocation: {
    fontSize: textSizes.subhead,
    fontFamily: typography.fontRegular,
    color: colors.mediumGrey ,
    marginBottom: margins.marginL
  },
  subheadTime: {
    fontSize: textSizes.subhead,
    fontFamily: typography.fontRegular,
    color: colors.red ,
    marginBottom: margins.marginL
  },
  sessionContainer: {
    marginLeft: margins.marginS,
    marginRight: margins.marginS,
    marginTop: margins.marginL
  }
});