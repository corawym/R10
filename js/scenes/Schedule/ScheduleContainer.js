import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSession } from '../../redux/modules/session';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Schedule',
      
    }
  }

  componentDidMount() {
    this.props.dispatch(getSession());   
  }

  static propTypes = {
    sessionData: PropTypes.array.isRequired,
  }

  render(){
    const { sessionData, isLoading, currentNavigatorUID } = this.props;
    return (
        <Schedule data={sessionData} isLoading={isLoading} currentNavigatorUID={currentNavigatorUID}/>
      )
  }
}

const mapStateToProps = store => {
  return {
    sessionData: store.session.sessionData,
    isLoading: store.session.isLoading,
    currentNavigatorUID: store.navigation.currentNavigatorUID
  }
}

export default connect(mapStateToProps)(ScheduleContainer)