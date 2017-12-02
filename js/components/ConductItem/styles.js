import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: margins.marginL,
    flexDirection: 'row',
  },
  rotateText: {
    backgroundColor: 'transparent',
    color: colors.purple,
    fontSize: textSizes.body,
    fontFamily: typography.fontRegular,
  },
  title: {
    color: colors.purple,
    fontSize: textSizes.body,
    fontFamily: typography.fontRegular,
    marginLeft: margins.marginL,
  },
  baseText: {
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL,
    lineHeight: textSizes.title2,
  },
  animatedView: {
    width: 16,
    height: 16,
  },
});

export default styles;
