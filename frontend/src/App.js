import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import { Timer } from 'react-compound-timer'
import Start from './Components/Start.js'
import Game from './Components/Game.js'
import End from './Components/End.js'

class App extends Component {

  state={
    score: 0,
    inGame: false,
    redirect: false,
    seconds: 10
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
      score: 0,
      seconds: 10,
      redirect: false
    })
  }


  end = () => {
    this.setState({
      redirect: true
    })
  }

  timer = () => {
    console.log(this.state.seconds)
    let interval = setInterval(() => {
      if (this.state.seconds !== 0){
        this.setState({
          seconds: this.state.seconds - 1
        })
      }else{
        clearInterval(interval) 
        this.setState({
          redirect: true,
          inGame: false
        })
      }
    }, 10000)
    return null
  }

  render(){
    return (
      <Router>
      <div className="App">
        {this.state.inGame ? <div style={{height: '30%'}}><h1 style={{margin: '0'}}>Speedy Click</h1><br></br> <div style={{margin: '0'}}>Score: {this.state.score}</div> {this.timer()} Time: {this.state.seconds}</div>  : <div style={{height: '30%'}}><h1 style={{marginBottom: '1%', marginTop: '0'}}>Speedy Click</h1></div>}
        {this.state.redirect ? <Redirect to='/end/' /> : console.log() }
      <div className="window">  
          <Switch>
            <Route exact path='/game' render={() => <Game score={this.state.score} addPoints={this.handleAddPoints} changeGameStatus={this.handleGameStatus} end={this.end} />} />
            <Route exact path='/end' render={() => <End score={this.state.score} resetScore={this.handleResetScore} />} />
            <Route exact path='/' render={() => <Start changeGameStatus={this.handleGameStatus} />} />
          </Switch>
      </div>
      </div>
      </Router>
    );
  } 
}

export default App;
