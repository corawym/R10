import React from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

const SpeakerContainer = ({ speakerData }) => (
  <Speaker speakerData={speakerData} />
);

SpeakerContainer.propTypes = {
  speakerData: PropTypes.object.isRequired,
};

export default SpeakerContainer;
