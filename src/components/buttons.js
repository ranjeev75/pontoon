import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends Component {

  render() {
    const { data, hitMe, dealerPlays, playAgain } = this.props;
    const totals = data;
    const button = totals < 21 ?
      <p><button type="button" onClick={() => hitMe()}>Hit me</button><button type="button" onClick={() => dealerPlays()}>Stick</button></p> : // eslint-disable-line
      <p><button type="button" onClick={() => playAgain()}>Play again</button></p>;

    return button;
  }
  }

Buttons.propTypes = {
  hitMe: PropTypes.func.isRequired,
  dealerPlays: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
  data: PropTypes.number.isRequired
};
