import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

const Loader = () => (
  <View style={styles.loaderWrapper}>
    <ActivityIndicator
      animating
      size="small"
      color="black"
    />
  </View>
);

export default Loader;
