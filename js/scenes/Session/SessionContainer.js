import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Session from './Session';
import Loader from '../../components/Loader';
import realm from '../../config/models';
import { getSpeaker } from '../../redux/modules/speaker';
import { getFaves } from '../../redux/modules/fave';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker));
    this.updateFave();
    realm.addListener('change', this.updateFave);  
  }

  updateFave = () => {
    this.props.dispatch(getFaves());
  }
  
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }

  static propTypes = {
    sessionData: PropTypes.object.isRequired,
    speakerData: PropTypes.object.isRequired,
    favesData: PropTypes.array.isRequired
  }

  render() {
    const { sessionData, speakerData, favesData, isLoading } = this.props;
    if (isLoading) {
      return (
        <Loader/>
      );
    } else {
      return (
        <View>
          <Session sessionData={sessionData} speakerData={speakerData} favesData={favesData} />
        </View>
      )
    }
  }
}

const mapStateToProps = store => {
  return {
    speakerData: store.speaker.speakerData,
    favesData: store.fave.favesData
  }
}

export default connect(mapStateToProps)(SessionContainer);