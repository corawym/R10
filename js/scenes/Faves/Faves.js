import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import SessionList from '../../components/Session';
import { formatSessionData } from '../../lib/dataFormatHelpers';

const Faves = ({ isLoading, data, favesData }) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }
  const sessionData = data.filter((session) => {
    return favesData.indexOf(session.session_id) > -1;
  });
  return (
    <SessionList data={formatSessionData(sessionData)} currentNavigatorUID="faves" favesData={favesData} />
  );
};

Faves.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  favesData: PropTypes.array.isRequired,
};

export default Faves;
