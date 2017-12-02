import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, LayoutAnimation, TouchableOpacity, Platform, UIManager, Animated, Easing } from 'react-native';

import styles from './styles';

class ConductItem extends Component {
  constructor() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    super();
    this.state = {
      showText: false,
      rotation: new Animated.Value(0),
    };
  }
  startAnimation() {
    Animated.parallel([
      Animated.timing(
        this.state.rotation,
        {
          toValue: 1,
          duration: this.duration,
          easing: Easing.linear,
        },
      ),
    ]).start(() => {
      this.reset();
      this.toggleText();
    });
  }
  reset() {
    this.setState({
      rotation: new Animated.Value(0),
    });
  }
  toggleText() {
    LayoutAnimation.easeInEaseOut();
    const { showText } = this.state;
    this.setState({
      showText: !showText,
    });
  }

  render() {
    const { data } = this.props;
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View>
        <TouchableOpacity onPress={() => this.startAnimation()}>
          <View style={styles.titleWrapper}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Text style={styles.rotateText}>
                {this.state.showText ? `-` : `+`}
              </Text>
            </Animated.View>
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.showText ? <Text style={styles.baseText}>{data.description}</Text> : false}
      </View>
    );
  }
}

ConductItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ConductItem;
