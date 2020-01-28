import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {

    render() {

        let title = this.props.isWinner ? <h1 className="Pokedex-winner">WINNING HAND</h1> : <h1 className="Pokedex-looser">LOOSING HAND</h1>
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(p => (
                        <Pokecard id={p.id} type={p.type} name={p.name} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;