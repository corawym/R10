import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import { Animated, Easing } from 'react-native'

import { styles } from './styles';

class ConductItem extends Component {

  constructor(){
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental 
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    super();
    this.state = {
      showText: false,
      rotation: new Animated.Value(0)
    }
  }
  
  _startAnimation(){
    LayoutAnimation.easeInEaseOut();
    Animated.parallel([
      Animated.timing(
        this.state.rotation,
        { 
          toValue: 1,
          duration: this.duration,
          easing: Easing.linear
        }
      ),
    ]).start()
  }

  _reset(){
    this.setState({
      rotation: new Animated.Value(0)
    })
  }

  _toggleText(){
    const { showText } = this.state;
    this.setState({
      showText: !showText
    })
    if(showText){
      this._reset()
    }
    this._startAnimation();
  }

  static PropTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const {data} = this.props
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View>
        <TouchableOpacity onPress={() => this._toggleText()}>
          <Text style={styles.titleWrapper}>

            <Animated.View 
              style={{
                width: 16,
                height: 16,
                transform:[{rotate:spin}]
              }}>
              <Text style={styles.rotateText}>{this.state.showText ? `-  `  : `+  `}</Text>
            </Animated.View>

            <Text style={styles.title}>{data.title}</Text>
          </Text>
        </TouchableOpacity>
        {this.state.showText ? <Text style={styles.baseText}>{data.description}</Text> : false}
      </View>  
    );
  }

}

export default ConductItem;