import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cardAdder, scorePlayer, scoreDealer, shuffle, checkAce } from './utils';

/* eslint-disable */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds values of cards in an array', () => {
  expect(cardAdder([{"value":3},{"value":7}])).toBe(10);
})

it ('adds values of cards in an array', () => {
  expect(cardAdder([{"value":10},{"value":5},{"value":16},{"value":25}])).toBe(56);
})

it ('adds values of cards in an array', () => {
  expect(cardAdder([{"value":1},{"value":10},{"value":23},{"value":55},{"value":19},{"value":53},{"value":11},{"value":99}])).toBe(271);
})

it ('return correct outcome of card score for player under 21', () => {
  expect(scorePlayer([{"value":3},{"value":7}])).toBe(10);
})

it ('return correct outcome of card score for player over 21', () => {
  expect(scorePlayer([{"value":3},{"value":7},{"value":12}])).toBe('Dealer wins!');
})

it ('return correct outcome of card score for player equal to 21', () => {
  expect(scorePlayer([{"value":4},{"value":9},{"value":8}])).toBe('Pontoon...You win!');
})

it ('return correct outcome of card score for dealer equal to 21', () => {
  expect(scoreDealer([{"value":4},{"value":9},{"value":8}],[{"value":4},{"value":9},{"value":8}])).toBe('winner');
})

it ('return correct outcome of card score for dealer over 21', () => {
  expect(scoreDealer([{"value":4},{"value":9},{"value":12}],[{"value":4},{"value":9},{"value":8}])).toBe('loser');
})

it ('return correct outcome of card score for dealer beating player', () => {
  expect(scoreDealer([{"value":4},{"value":9},{"value":4}],[{"value":4},{"value":5},{"value":1}])).toBe('winner');
})

it ('expect that array input array is not output in same order, by being ordered randomly', () => {
  expect(shuffle([1,2,3,4,5,6,7,8,9,10])).not.toBe([1,2,3,4,5,6,7,8,9,10]);
})

it ('expect that card value to be 11 when running total < 10', () => {
  expect(checkAce({'name': 'ace', 'value': 1}, 3)).toBe(11);
})

it ('expect that card value to be 11 when running total > 11', () => {
  expect(checkAce({'name': 'ace', 'value': 1}, 15)).toBe(1);
})

it ('expect that card value to be facer value when it is not an ace', () => {
  expect(checkAce({'name': 'diamonds', 'value': 8}, 15)).toBe(8);
})
