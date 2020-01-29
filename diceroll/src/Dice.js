import React from 'react';
import './Dice.css';

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceOne: 1,
            diceTwo: 1,
            animationClass: "",
            rolling: false
        }

        // this.icon1 = React.createRef();
        // this.icon2 = React.createRef();

        this.randomRoll = this.randomRoll.bind(this);
    }

    randomIndex() {
        return Math.floor(Math.random() * 6) + 1;
    }

    randomRoll(e) {
        this.setState({ diceOne: this.randomIndex(), diceTwo: this.randomIndex() })
        setTimeout(() => {
            this.setState(() => ({ diceOne: this.randomIndex(), diceTwo: this.randomIndex() }))
        }, 200);
        setTimeout(() => {
            this.setState(() => ({ diceOne: this.randomIndex(), diceTwo: this.randomIndex() }))
        }, 500);
        setTimeout(() => {
            this.setState(() => ({ diceOne: this.randomIndex(), diceTwo: this.randomIndex() }))
        }, 800);
        this.setState({ animationClass: "animated", rolling: true })
        setTimeout(() => {
            this.setState(() => ({ animationClass: "", rolling: false, diceOne: this.randomIndex(), diceTwo: this.randomIndex() }))
        }, 1100);


    }



    render() {
        const dices = {
            1: "fas fa-dice-one",
            2: "fas fa-dice-two",
            3: "fas fa-dice-three",
            4: "fas fa-dice-four",
            5: "fas fa-dice-five",
            6: "fas fa-dice-six",
        }
        return (
            <div className="Dice">
                <div className="dice-container">
                    <i className={dices[this.state.diceOne] + " " + this.state.animationClass} ref={this.icons}></i>
                    <i className={dices[this.state.diceTwo] + " " + this.state.animationClass} ref={this.icons}></i>
                </div>
                <button className="btn btn-lg" onClick={this.randomRoll} disabled={this.state.rolling} > {!this.state.rolling ? "ROLL DICE!" : "ROLLING..."}</button>
            </div >
        )
    }
}

export default Dice;