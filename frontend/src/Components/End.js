import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class End extends Component {
    render() {
        return (
            <div className="end" style={{position: 'relative', height: '40rem', width: '40rem'}}>
                <h1 style={{color: 'white', fontSize: '3rem', position: 'relative', top: '20%', marginTop: '0'}}>The End</h1>
                <h2 style={{color: 'Green', fontSize: '2rem', position: 'relative', top: '30%'}}>Score: {this.props.score}</h2>
                <NavLink className="return" to='/' onClick={this.props.resetScore} style={{
                    textDecoration: 'none',
                    position: 'relative',
                    color: 'red',
                    fontSize: '1.5rem',
                    top: '40%',
                    left: '-1%'
                    }}> Return </NavLink> 
            </div>
        )
    }
}
