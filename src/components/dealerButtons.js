import React from 'react';
import PropTypes from 'prop-types';

const DealerButtons = (props) => {
  const { action, text } = props;

   return <button type="button" onClick={() => action()}>{text}</button> // eslint-disable-line
};

DealerButtons.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default DealerButtons;
