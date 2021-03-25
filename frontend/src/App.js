import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Start from './Components/Start.js'
import Game from './Components/Game.js'
import End from './Components/End.js'

class App extends Component {

  render(){
    return (
      <div className="App">
      <div className="window">
        <BrowserRouter>
        <Switch>
        <Route path='/game' render={() => <Game />} />
        <Route path='/end' render={() => <End />} />
        <Route path='/' render={() => <Start />} />
        </Switch>
        </BrowserRouter>
      </div>
      </div>
    );
  } 
}

export default App;
