import { StyleSheet, Platform } from 'react-native';

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
    marginTop: margins.marginS,
    marginBottom: margins.marginS,
    ...Platform.select({
      ios: {
        marginLeft: margins.marginS,
        marginRight: margins.marginS
      },
      android: {
        marginLeft: margins.marginL,
        marginRight: margins.marginL
      },
    }),
  },
  sessionSubtitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentWrapper: {
    marginTop: margins.marginL,
    marginBottom: margins.marginL,
    ...Platform.select({
      ios: {
        marginLeft: margins.marginS,
        marginRight: margins.marginS
      },
      android: {
        marginLeft: margins.marginL,
        marginRight: margins.marginL
      },
    }),
  },
  sectionWrapper: {
    backgroundColor: colors.lightGrey,
  },
  touchable: {
    backgroundColor: 'red'
  }
})