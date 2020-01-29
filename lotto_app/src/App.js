import React from 'react';
import Ball from './Ball';
import Lottery from './Lottery'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxBalls="4" maxNum="10" />
      </div>
    );
  }
}

export default App;
