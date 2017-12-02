import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getConduct } from '../../redux/modules/conduct';
import About from './About';
import Loader from '../../components/Loader';

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    },
  }

  static propTypes = {
    conductData: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(getConduct());
  }

  render() {
    const { conductData, isLoading } = this.props;
    if (isLoading) {
      return (
        <Loader />
      );
    }
    return (
      <About data={conductData} />
    );
  }
}

const mapStateToProps = store => {
  return {
    conductData: store.conduct.conductData,
    isLoading: store.conduct.isLoading,
  };
};

export default connect(mapStateToProps)(AboutContainer);
