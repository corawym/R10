import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  sessionTitle: {
    fontSize: textSizes.body,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginS
  },
  sessionSubtitle: {
    fontSize: textSizes.subhead,
    fontFamily: typography.fontRegular,
    color: colors.mediumGrey
  },
  sectionTime: {
    fontSize: textSizes.subhead,
    fontFamily: typography.fontRegular,
    margin: margins.marginS
  },
  sessionSubtitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentWrapper: {
    marginTop: margins.marginL,
    marginBottom: margins.marginL,
    marginLeft: margins.marginS,
    marginRight: margins.marginS
  },
  sectionWrapper: {
    backgroundColor: colors.lightGrey
  }
})