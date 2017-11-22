import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import SessionList from '../../components/Session';
import { styles } from './styles';

const Schedule = ({data, isLoading}) => {
  if (isLoading) {
    return (
    <ActivityIndicator animating={true} size="small" color="black" />
    );
  }else{
    return(
      <SessionList data={data}/>
    )
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired
}

export default Schedule;