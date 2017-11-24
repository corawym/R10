import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';


export const styles = StyleSheet.create({
  titleWrapper: {
    color: colors.purple,
    fontSize: textSizes.body,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginL
  },
  baseText: {
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL
  },
})