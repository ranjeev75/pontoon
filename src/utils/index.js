
const PONTOON = 21;

// Fisher-Yates (aka Knuth) Shuffle
export function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex; //eslint-disable-line

// While there remain elements to shuffle...
  while (currentIndex !== 0) {
  // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

  // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex]; // eslint-disable-line
    array[randomIndex] = temporaryValue; // eslint-disable-line
  }
  return array;
}

// ace card value set to 1 || 11 depending on hand total currently
export function checkAce(card, total) {
  const cardValue = card.name !== 'ace' ? card.value : PONTOON - total > 11 ? 11 : card.value; //eslint-disable-line
  return cardValue;
}
// calculate current score of the hand
export function cardAdder(arr) {
  return arr.reduce((total, card) => total + checkAce(card, total) : total, 0); // eslint-disable-line
}


// determine if player has got pontoon or has gone bust.....
// if they stick then result determined by outcome of dealer hand
export function scorePlayer(arr) {
  const totals = cardAdder(arr);
  const result = totals === PONTOON ? // eslint-disable-line
  'Pontoon...You win!' :
  totals > PONTOON ?
  'Dealer wins!' :
  totals;

  return result;
}

// determine if dealer had got pontoon or beat player score to win hand, or has gone bust
export function scoreDealer(arrDealer, arrPlayer) {
  const totals = cardAdder(arrDealer);
  const totalsPlayer = cardAdder(arrPlayer);
  const result = totals === PONTOON ? // eslint-disable-line
  'winner' :
  totals > PONTOON ? // eslint-disable-line
  'loser' :
  totals > totalsPlayer ?
  'winner' :
  totals;

  return result;
}
