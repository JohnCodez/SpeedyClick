import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Start extends Component {

    render() {
        return (
            <div className="start" style={{position: 'relative', height: '40rem', width: '40rem'}}>
                <NavLink className="start" to='/game' onClick={this.props.changeGameStatus} style={{
                    textDecoration: 'none',
                    position: 'relative',
                    color: 'white',
                    fontSize: '10rem',
                    top: '30%',
                    left: '-1%'
                    }}> Start </NavLink> 
            </div>
        )
    }
}
