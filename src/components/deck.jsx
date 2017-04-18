import React from 'react';
import PropTypes from 'prop-types';

const Deck = (props) => {
  const { cards } = props;
  return (
    <div style={{ marginTop: 20 }}> {
    }
      {cards.map((card, index) =>
          <img src={require(`${card.backFace}`)} alt="card" key={index} height="175" style={{ marginLeft: -110 }} /> // eslint-disable-line
        )}
    </div>
  );
};

Deck.propTypes = {
  cards: PropTypes.array.isRequired // eslint-disable-line
};

export default Deck;
