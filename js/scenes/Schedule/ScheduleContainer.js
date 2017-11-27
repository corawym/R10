import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import realm from '../../config/models';
import { getSession } from '../../redux/modules/session';
import { getFaves } from '../../redux/modules/fave';
import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.dispatch(getSession());
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
    sessionData: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    favesData: PropTypes.array.isRequired
  }

  render(){
    const { sessionData, isLoading, favesData } = this.props;
    return (
      <Schedule data={sessionData} isLoading={isLoading} favesData={favesData} />
    )
  }
}

const mapStateToProps = store => {
  return {
    sessionData: store.session.sessionData,
    isLoading: store.session.isLoading,
    favesData: store.fave.favesData
  }
}

export default connect(mapStateToProps)(ScheduleContainer)