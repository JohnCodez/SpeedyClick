import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Timer } from 'react-compound-timer'
import Start from './Components/Start.js'
import Game from './Components/Game.js'
import End from './Components/End.js'

class App extends Component {

  state={
    score: 0,
    inGame: false
  }

  handleAddPoints = () => {
    this.setState({
      score: this.state.score + 100
    })
    // console.log(Date.prototype.getSeconds)
  }

  handleGameStatus = () => {
    if (this.state.inGame) {
      this.setState({
        inGame: false
      })
    } else {
      this.setState({
        inGame: true
      })
    }
  }

  handleResetScore = () => {
    this.setState({
      score: 0
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.inGame ? <div style={{height: '30%'}}><h1 style={{margin: '0'}}>Speedy Click</h1><br></br>Time: <Timer/> <h2 style={{margin: '0'}}>Score: {this.state.score}</h2></div>  : <div style={{height: '30%'}}><h1 style={{marginBottom: '1%', marginTop: '0'}}>Speedy Click</h1></div>}
      <div className="window">  
        <Router>
          <Switch>
            <Route exact path='/game' render={() => <Game score={this.state.score} addPoints={this.handleAddPoints} changeGameStatus={this.handleGameStatus} />} />
            <Route exact path='/end' render={() => <End score={this.state.score} resetScore={this.handleResetScore} />} />
            <Route exact path='/' render={() => <Start changeGameStatus={this.handleGameStatus} />} />
          </Switch>
        </Router>
      </div>
      </div>
    );
  } 
}

export default App;
