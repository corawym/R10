import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConduct } from '../../redux/modules/conduct';

import About from './About';

class AboutContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.dispatch(getConduct());   
  }

  static propTypes = {
    conductData: PropTypes.array.isRequired,
  }

  render(){
    const { conductData, isLoading } = this.props;
    if (isLoading) {
      return (
      <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <About data={conductData}/>
      )
    }
  }

}

const mapStateToProps = store => {
  return {
    conductData: store.conduct.conductData,
    isLoading: store.conduct.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer)



