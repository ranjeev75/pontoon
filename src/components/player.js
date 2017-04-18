import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import { checkAce } from '../utils';

const Player = (props) => {
  const { cards, currentScore, showButton, hitMe, dealerPlays, playAgain } = props; // eslint-disable-line
  return (
      <div> {// eslint-disable-line
        }
        {cards.map((card, index) =>
            <img src={require(`${card.frontFace}`)} alt="card" key={index} height="175" style={{ marginLeft: 10 }} /> // eslint-disable-line
          )}
        {cards.length > 0 ?
          <span>
            {showButton ?
              <Buttons data={cards.reduce((total, card) => total + checkAce(card, total) : total, 0)} hitMe={() => hitMe()} dealerPlays={() => dealerPlays()} playAgain={() => playAgain()} /> : // eslint-disable-line
              null}
            <p>Result {currentScore}</p>
          </span> : null
          }
      </div>
  );
};

Player.propTypes = {
  cards: PropTypes.array.isRequired, // eslint-disable-line
  showButton: PropTypes.bool.isRequired,
  hitMe: PropTypes.func.isRequired,
  dealerPlays: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired
};

export default Player;
