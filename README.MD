# Installation

```
npm install cards.js
```

# Example usage

```js
// import cards.js
const Cards = require('cards.js');

// Create a new deck instance
// with Jokers
const Deck = new Cards(true);
// without Jokers
const Deck = new Cards(false);

// Shuffle the deck
Deck.shuffle();
// Remove a card from the deck, useful for discarding cards
// 1st parameter is the suit and the second is the value of the card
Deck.removeCard('diamonds', 9);

// face cards and aces are strings
Deck.removeCard('diamonds', 'ace');

// You can add a card to the bottom of the deck at anytime like so
Deck.addCard('clubs', 'king');

// removes the card at the top of the deck and returns it.
const topCard = Deck.takeTopCard();

// You can reset the deck at anytime to its original form.
// Usefull so you dont have to make multiple instances of a deck
// when a game is completed
Deck.reset();

// you can access the cards in the deck at anytime
// Deck.cards is an array
console.log(Deck.cards);
```
