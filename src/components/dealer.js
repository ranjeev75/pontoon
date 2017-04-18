import React from 'react';
import PropTypes from 'prop-types';

const Dealer = (props) => {
  const { cards, currentScore } = props; // eslint-disable-line
  return (
      <div> {// eslint-disable-line
      }{cards.map((card, index) =>
          <img src={require(`${card.frontFace}`)} alt="card" key={index} height="175" style={{ marginLeft: 10 }} /> // eslint-disable-line
        )}
        {cards.length > 0 ?
          <p>Result {currentScore}</p> : null
        }
      </div>
  );
};


Dealer.propTypes = {
  cards: PropTypes.array.isRequired // eslint-disable-line
};

export default Dealer;
