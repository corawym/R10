import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

class ConductItem extends Component {

  constructor(){
    super();
    this.state = {
      showText: false
    }
  }
  
  animate(){
    LayoutAnimation.easeInEaseOut();
  }
  
  toggleText(){
    const { showText } = this.state;
    this.setState({
      showText: !showText
    })
    this.animate();
  }

  render() {
    const {data} = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleText()}>
          <Text style={styles.titleWrapper}>
            <Text>+ </Text>
            <Text style={styles.title}>{data.title}</Text>
          </Text>
        </TouchableOpacity>
        {this.state.showText ? <Text style={styles.baseText}>{data.description}</Text> : false}
      </View>  
    );
  }

}

export default ConductItem;