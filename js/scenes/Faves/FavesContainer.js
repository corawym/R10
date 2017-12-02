import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Faves from './Faves';
import realm from '../../config/models';
import { getFaves } from '../../redux/modules/fave';

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    },
  }

  static propTypes = {
    sessionData: PropTypes.array.isRequired,
    favesData: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount = () => {
    this.updateFave();
    realm.addListener('change', this.updateFave);
  }

  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }

  updateFave = () => {
    this.props.dispatch(getFaves());
  }

  render() {
    const { sessionData, favesData, isLoading } = this.props;
    return (
      <Faves data={sessionData} favesData={favesData} isLoading={isLoading} />
    );
  }
}

const mapStateToProps = store => {
  return {
    favesData: store.fave.favesData,
    sessionData: store.session.sessionData,
    isLoading: store.session.isLoading,
  };
};

export default connect(mapStateToProps)(FavesContainer);
