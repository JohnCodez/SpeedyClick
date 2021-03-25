import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "../stylesheets/Game.css"

export default class Game extends Component {

    state = {
        boxes: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
    }


    handleClick = (boxNumber) => {
        
    }

    render() {
        return (
            <div className="game">
                <Container className="grid">
                <Row>
                    <Col className='col' style={{width: '25%', flex: 'initial', backgroundColor: this.state.boxes[0] }} onClick={() => {this.handleClick(0)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[1] }} onClick={() => {this.handleClick(1)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[2] }} onClick={() => {this.handleClick(2)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[3] }} onClick={() => {this.handleClick(3)}}></Col>
                </Row>
                <Row>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[4] }}  onClick={() => {this.handleClick(4)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[5] }} onClick={() => {this.handleClick(5)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[6] }} onClick={() => {this.handleClick(6)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[7] }} onClick={() => {this.handleClick(7)}}></Col>
                </Row>
                <Row>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[8] }} onClick={() => {this.handleClick(8)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[9] }} onClick={() => {this.handleClick(9)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[10] }} onClick={() => {this.handleClick(10)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[11] }} onClick={() => {this.handleClick(11)}}></Col>
                </Row>
                <Row>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[12] }} onClick={() => {this.handleClick(12)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[13] }} onClick={() => {this.handleClick(13)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[14] }} onClick={() => {this.handleClick(14)}}></Col>
                    <Col className='col' style={{width: '25%', flex: 'initial' ,backgroundColor: this.state.boxes[15] }} onClick={() => {this.handleClick(15)}}></Col>
                </Row>
                
                </Container>
            </div>
        )
    }
}
