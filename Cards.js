class Deck {
	constructor(includeJokers) {
		this.cards = [];

		if (includeJokers) {
			if (typeof includeJokers === 'boolean')
				this.includeJokers = includeJokers || false;
			else {
				throw new Error('includeJokers paramater must be boolean');
			}
		}

		this.reset();
	}

	shuffle() {
		const shuffledDeck = this.cards.sort((a, b) => 0.5 - Math.random());
		this.cards = shuffledDeck;
		return this.cards;
	}

	removeCard(suitName, cardValue) {
		const card = this.cards.find((card) => {
			const suit = card[0].name;
			const value = card[1];
			if (suitName === suit && cardValue === value) return true;
		});

		if (!card) return 'Card not found';

		const index = this.cards.indexOf(card);

		this.cards.splice(index, 1);
	}

	addCard(suitName, cardValue) {
		let suitIcon;
		switch (suitName) {
			case 'diamonds':
				suitIcon = '♦';
				break;
			case 'clubs':
				suitIcon = '♣';
				break;
			case 'hearts':
				suitIcon = '♥';
				break;
			default:
				suitIcon = '♠';
				break;
		}
		let card = [];
		if (cardValue === 'joker') {
			card.push({ name: suitName }, cardValue);
		} else {
			card.push([{ icon: suitIcon, name: suitName }, cardValue]);
		}

		this.cards.push(card);
	}

	takeTopCard() {
		const card = this.cards.shift();
		return card;
	}

	reset() {
		this.cards = [];
		const suits = [
			{ icon: '♣', name: 'clubs' },
			{ icon: '♦', name: 'diamonds' },
			{ icon: '♥', name: 'hearts' },
			{ icon: '♠', name: 'spades' },
		];

		for (const suit of suits) {
			for (let i = 2; i < 15; i++) {
				let name;
				if (i > 10) {
					if (i === 11) name = 'jack';
					else if (i === 12) name = 'queen';
					else if (i === 13) name = 'king';
					else if (i === 14) name = 'ace';
				} else {
					name = i;
				}
				const card = [suit, name];
				this.cards.push(card);
			}
		}

		if (this.includeJokers) {
			const card = [{ name: 'joker' }, 'joker'];
			this.cards.push(card);
			this.cards.push(card);
		}
	}
}

module.exports = Deck;
