import { StyleSheet } from 'react-native';

import { typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    marginTop: margins.marginL,
    marginBottom: margins.marginL,
  },
  buttonBg: {
    flex: 0,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: typography.fontRegular,
    fontSize: textSizes.subhead,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: margins.marginS,
    marginBottom: margins.marginS,
    marginLeft: margins.marginL,
    marginRight: margins.marginL,
  },
})