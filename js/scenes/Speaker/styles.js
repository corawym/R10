import { StyleSheet, Platform } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: 'black',
    paddingTop: margins.marginL,
    paddingLeft: margins.marginS,
    paddingRight: margins.marginS
  },
  speakerWrapper: {
    backgroundColor: 'white',
    paddingTop: margins.marginL,
    paddingLeft: margins.marginL - margins.marginS,
    paddingRight: margins.marginL - margins.marginS
  },
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  speakerName: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
  },
  speakerBio: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontLight,
  }

});