import React from 'react';
import Home from './Home';
import Burrito from './Burrito';
import Taco from './Taco';
import OldFish from './OldFish';
import NavBar from './NavBar';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/Burrito' render={() => <Burrito />} />
          <Route exact path='/Taco' render={() => <Taco />} />
          <Route exact path='/OldFish' render={() => <OldFish />} />
        </Switch>
      </div>

    )
  }
}

export default App;
