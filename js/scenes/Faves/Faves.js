import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import SessionList from '../../components/Session';
import { formatSessionData } from '../../lib/dataFormatHelpers';
import { styles } from './styles';

const Faves = ({ isLoading, data, favesData }) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }else{
    const sessionData = data.filter((session) => {
        return favesData.indexOf(session.session_id) > -1;
    })
    return(
      <SessionList data={formatSessionData(sessionData)} currentNavigatorUID={'faves'} favesData={favesData} />
    )
  }
}

Faves.propTypes = {

}

export default Faves;