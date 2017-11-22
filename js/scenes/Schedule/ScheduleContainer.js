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

  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     isLoading: true,
  //   };
  // }

  componentDidMount() {
    this.props.dispatch(getSession());   
  }

  static propTypes = {
    sessionData: PropTypes.array.isRequired,
  }

  render(){
    const { sessionData, isLoading } = this.props;
    return (
        <Schedule data={sessionData} isLoading={isLoading} />
      )
  }
}

const mapStateToProps = store => {
  return {
    sessionData: store.session.sessionData,
    isLoading: store.session.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)