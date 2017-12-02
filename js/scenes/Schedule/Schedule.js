import React from 'react';
import PropTypes from 'prop-types';

import { formatSessionData } from '../../lib/dataFormatHelpers';
import SessionList from '../../components/Session';
import Loader from '../../components/Loader';

const Schedule = ({ data, isLoading, favesData }) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }
  return (
    <SessionList data={formatSessionData(data)} currentNavigatorUID="schedule" favesData={favesData} />
  );
};

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  favesData: PropTypes.array.isRequired,
};

export default Schedule;
