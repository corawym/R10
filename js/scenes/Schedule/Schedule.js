import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import SessionList from '../../components/Session';
import Loader from '../../components/Loader';
import { styles } from './styles';

const Schedule = ({data, isLoading, currentNavigatorUID}) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }else{
    return(
      <SessionList data={data} currentNavigatorUID={currentNavigatorUID}/>
    )
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired
}

export default Schedule;