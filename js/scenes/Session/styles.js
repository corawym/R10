import { StyleSheet, Platform } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  sessionContainer: {
    marginTop: margins.marginL,
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
  title: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginL
  },
  body: {
    fontSize: textSizes.bodyL,
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
    color: colors.red,
    marginBottom: margins.marginL
  },
  subheadPresent: {
    fontSize: textSizes.subhead,
    fontFamily: typography.fontRegular,
    color: colors.mediumGrey,
    marginBottom: margins.marginS
  },
  subheadPresenter: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontRegular,
    marginLeft: margins.marginL
  },
  subheadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speakerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  speakerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
  }
});