import { StyleSheet, Platform } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: 'black',
    paddingTop: margins.marginL,
    ...Platform.select({
      ios: {
        paddingLeft: margins.marginS,
        paddingRight: margins.marginS,
      },
      android: {
        paddingLeft: margins.marginL,
        paddingRight: margins.marginL
      },
    }),
  },
  navHeaderWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginBottom: margins.marginL,
      },
    }),
  },
  navIcon: {
    flex:0.1
  },
  navHeader: {
    flex:0.9,
    color: 'white',
    fontSize: textSizes.title3,
    fontFamily: typography.fontRegular,
    textAlign: 'center',

  },
  speakerWrapper: {
    backgroundColor: 'white',
    paddingTop: margins.marginL,
    paddingBottom: margins.marginL,
    paddingLeft: margins.marginL - margins.marginS,
    paddingRight: margins.marginL - margins.marginS,
  },
  speakerInfoWrapper:{
    alignItems: 'center',
    marginTop: margins.marginS
  },
  speakerImage: {
    width: 100,
    height: 100,
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
      android: {
        borderRadius: 100,
      },
    }),  
  },
  speakerName: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
    marginTop: margins.marginL,
  },
  speakerBio: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontLight,
    lineHeight: textSizes.title2,
    marginTop: margins.marginL,
  }
});