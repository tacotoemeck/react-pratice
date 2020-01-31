import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from './words';
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    // maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    let word = randomWord();
    this.state = { nWrong: 0, guessed: new Set(), answer: word, maxWrong: word.length, gameFinished: false };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }



  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    console.log(randomWord)
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));

    if (this.state.nWrong + 1 == this.state.maxWrong) { this.setState({ gameFinished: true }) }
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    if (!this.state.gameFinished) {
      return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, i) => (
        <button
          value={ltr}
          key={ltr + i}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr) || this.state.gameFinished}
        >
          {ltr}
        </button>
      ));
    } else {
      return "YOU LOOSE!"
    }
  }

  resetGame() {
    let word = randomWord()
    this.setState({
      nWrong: 0, guessed: new Set(), answer: word, maxWrong: word.length, gameFinished: false
    })
  }

  handleClick(e) {
    this.resetGame();
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>

        <img src={this.props.images[this.state.nWrong]} alt={this.state.nWrong + "/" + this.props.maxWrong} />
        <p className="Hangman-guesses">Wrong guesses count: {this.state.nWrong}</p>
        <button class="Hangman-button" onClick={this.handleClick}>RESTART</button>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>

      </div>
    );
  }
}

export default Hangman;
