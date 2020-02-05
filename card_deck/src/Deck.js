import React from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] };
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
        this.setState({ deck: deck.data });

    }

    async getCard() {
        try {
            let cardURL = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/?count=2`;
            let cardRes = await axios.get(cardURL);
            if (cardRes.data.remaining === 0) {
                throw new Error('No cards left!')
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch (err) {
            alert(err)
        }
    }

    render() {
        const cards = this.state.drawn.map(c => (
            <Card name={c.name} image={c.image} />
        ))
        return (
            <div className="Deck">
                <h1 className="Deck-title" >♦️ card dealer ♦️</h1>
                <h2 className="Deck-title subtitle">♦️ PRACTICE APP FOR API CALLS IN REACT ♦️</h2>
                <button className="Dec-btn" onClick={this.getCard}>Get Card!</button>
                <div className="deck-card-area">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck;