import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { formatSessionData } from '../../lib/dataFormatHelpers';
import SessionList from '../../components/Session';
import Loader from '../../components/Loader';
import { styles } from './styles';


const Schedule = ({data, isLoading, favesData}) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }else{
    return(
      <SessionList data={formatSessionData(data)} currentNavigatorUID={'schedule'} favesData={favesData} />
    )
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired
}

export default Schedule;