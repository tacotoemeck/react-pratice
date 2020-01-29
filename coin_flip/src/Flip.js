import React from 'react';
import Coin from './Coin'
import './Flip.css';

class Flip extends React.Component {
    static defaultProps = {
        sides: ["https://tinyurl.com/react-coin-heads-jpg", "https://i.ebayimg.com/images/g/wGEAAOSwYu1crzzn/s-l400.jpg"]

    }

    constructor(props) {
        super(props);
        this.state = {
            current_side: this.props.sides[1],
            number_of_flips: 0,
            heads_count: 0,
            tails_count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    fliper() {
        let random = Math.floor(Math.random() * 2);
        let flips = this.state.number_of_flips + 1;
        let heads = this.state.heads_count;
        let tails = this.state.tails_count;
        let current;
        if (this.state.current_side == "https://tinyurl.com/react-coin-heads-jpg") {
            heads++;
        }
        else {
            tails++
        }

        this.setState({
            current_side: this.props.sides[random],
            number_of_flips: flips,
            heads_count: heads,
            tails_count: tails
        })
    }

    handleClick() {
        this.fliper();
    }

    render() {
        return (
            <div className="Flip">
                <h2>Let's flip a coin!</h2>
                <Coin src={this.state.current_side} />
                <button onClick={this.handleClick}>FLIP!</button>
                <p>Out of {this.state.number_of_flips}, there have been {this.state.heads_count} heads and {this.state.tails_count} tails.</p>
            </div>
        )
    }
}

export default Flip;