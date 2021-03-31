import React, { Component } from 'react'
import { Timer } from 'react-compound-timer'


export default class Timer extends Component {

    state = {

    }


    render() {
        return (
            <div>
                <Timer>
                    <Timer.Seconds />
                </Timer>
            </div>
        )
    }
}
