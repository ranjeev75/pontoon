import React, { Component } from 'react';
import './styles/app.css';
import cards from './cards.json';
import Player from './components/player';
import Deck from './components/deck';
import Dealer from './components/dealer';
import DealerButtons from './components/dealerButtons';
import { shuffle, scorePlayer, scoreDealer } from './utils';

// original state, when new game initiated
const initialState = {
  deck: cards,
  player: [],
  dealer: [],
  showButton: true,
  playerButtons: true
};

// component styling
const styles = {
  app: {
    textAlign: 'center'
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // ensure that setInterval no longer running
  componentWillUnmount() {
    clearInterval(this.id);
  }

  // clean state for new game
  playAgain = () => this.setState(initialState);

  // take top card from deck and add to player card array
  hitMe = () => {
    const addCard = this.state.deck.slice(-1);
    this.setState({ player: [...this.state.player, ...addCard],
      deck: this.state.deck.slice(0, -1)
    });
  }

  // take top card from deck and add to dealer array, player can no longer be dealt cards
  stick = () => {
    const addCard = this.state.deck.slice(-1);
    this.setState({ dealer: [...this.state.dealer, ...addCard],
      deck: this.state.deck.slice(0, -1),
      playerButtons: false
    });
  }

  // calculates dealer score and also compares against player score to determine winner of th hand
  scoreDealerTotal = () => {
    const outcome = scoreDealer(this.state.dealer, this.state.player);
    const result = outcome === 'winner' ? (this.stopDealing(), <DealerButtons action={() => this.playAgain()} text={'Dealer wins, play again'} />) : outcome === 'loser' ? // eslint-disable-line
    (this.stopDealing(), <DealerButtons action={() => this.playAgain()} text={'Player wins, play again'} />) :
    outcome;

    return result;
  }

  // deal card to dealer every 1 second
  dealerPlays = () => {
    this.id = setInterval(() => {
      this.stick();
    }, 1000);
  }

  // stop dealing card to dealer
  stopDealing = () => clearInterval(this.id);

  // remove 3 cards from deck and store in arr to disperse 2 to player and 1 to dealer
  deal = () => {
    this.setState({ showButton: !this.state.showButton });
    this.setState({ deck: shuffle(cards) });
    const cardsFromTop = this.state.deck.slice(-3);
    this.setState({ deck: this.state.deck.slice(0, -3) });
    const dealerCards = cardsFromTop.slice(0, 1);
    const playerCards = cardsFromTop.slice(1, 3);
    this.setState({ dealer: dealerCards });
    this.setState({ player: playerCards });
  }

  render() {
    return (
      <div style={styles.app}>
        <Deck cards={this.state.deck} />
        {this.state.showButton ? <button type="button" onClick={() => this.deal()}>New game</button> : null}
        <Player
          cards={this.state.player}
          currentScore={scorePlayer(this.state.player)}
          showButton={this.state.playerButtons}
          hitMe={() => this.hitMe()}
          dealerPlays={() => this.dealerPlays()}
          playAgain={() => this.playAgain()}
        />

        <Dealer cards={this.state.dealer} currentScore={this.scoreDealerTotal()} />
      </div>
    );
  }
}
