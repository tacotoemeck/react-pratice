import React from 'react';
import './Coin.css';

class Coin extends React.Component {
    render() {
        return (
            <div className="Coin">
                <img src={this.props.src} />
            </div>

        )
    }
}

export default Coin;